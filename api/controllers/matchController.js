// api/controllers/matchController.js
import Groq from "groq-sdk";
import PDFDocument from "pdfkit";
import { env } from "process";
const groq = new Groq({
  apiKey: env.GROQ_API_KEY,
});

// -----------------------------------------
//  MAIN AI MATCH KUNDLI HANDLER
// -----------------------------------------
export const matchKundliAI = async (req, res) => {
  try {
    const { user, partner, options } = req.body;

    if (!user || !partner)
      return res.status(400).json({ message: "Details missing" });

    // Prepare prompt
    const prompt = `
You are a professional Vedic astrologer.
Generate a compatibility report between:

Person 1:
- Name: ${user.name}
- Birth: ${user.birthDatetime}
- Birth Place: ${user.birthPlace}
- Gender: ${user.gender}

Person 2:
- Name: ${partner.name}
- Birth: ${partner.birthDatetime}
- Birth Place: ${partner.birthPlace}
- Gender: ${partner.gender}

Task:
Give a detailed astrological compatibility analysis including:
- Overall Compatibility Score (0–100)
- Strengths in the relationship
- Weak areas
- Emotional, mental, and spiritual connection
- Long-term potential
- Remedies for harmony

Return output in structured JSON:
{
  "title": "",
  "summary": "",
  "score": 0,
  "highlights": [],
  "sections": [
    {"title": "", "content": ""},
    {"title": "", "content": ""}
  ],
  "raw": {}
}
    `;

    const ai = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(ai.choices[0].message.content);

    // attach names
    result.userName = user.name;
    result.partnerName = partner.name;

    res.json(result);
  } catch (err) {
    console.log("Match Kundli AI error:", err);
    res.status(500).json({ message: "Failed to generate compatibility" });
  }
};

// -----------------------------------------
//  PDF GENERATION FROM RESULT
// -----------------------------------------
export const matchKundliPDF = async (req, res) => {
  try {
    const { result } = req.body;
    if (!result)
      return res.status(400).json({ message: "No result to export" });

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="match_${Date.now()}.pdf"`
    );

    doc.pipe(res);

    doc.fontSize(22).text(result.title || "Match Report", { underline: true });
    doc.moveDown();

    doc.fontSize(15).text(`Summary:`, { bold: true });
    doc.fontSize(12).text(result.summary || "");
    doc.moveDown();

    doc.fontSize(15).text(`Compatibility Score: ${result.score}%`);
    doc.moveDown();

    doc.fontSize(15).text(`Highlights:`);
    result.highlights?.forEach((h) => doc.fontSize(12).text("• " + h));
    doc.moveDown();

    result.sections?.forEach((sec) => {
      doc.fontSize(16).text(sec.title, { underline: true });
      doc.fontSize(12).text(sec.content);
      doc.moveDown();
    });

    doc.end();
  } catch (err) {
    console.log("PDF Error:", err);
    res.status(500).json({ message: "PDF generation failed" });
  }
};
