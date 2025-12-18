import Groq from "groq-sdk";
import User from "../models/user.model.js";
import ChatHistory from "../models/chat.model.js";

const groq = new Groq({
  apiKey: "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",
});

export const aiHoroscope = async (req, res) => {
  try {
    const userId = req.userId;

    // Fetch profile inside User model
    const user = await User.findById(userId);
    if (!user || !user.profileCompleted) {
      return res.status(400).json({ message: "Profile incomplete" });
    }

    const { dob, birthPlace, birthTime } = user.profile;

    const userMessage = req.body.message;

    // Fetch previous horoscope chat history (optional: limit 10)
    const history = await ChatHistory.find({
      userId,
      queryType: "horoscope",
    })
      .sort({ createdAt: -1 })
      .limit(10);

    // Convert old history into Groq format
    const formattedHistory = history
      .reverse()
      .map((h) => [
        { role: "user", content: h.userMessage },
        { role: "assistant", content: h.botReply },
      ])
      .flat();

    // AI Call
    const ai = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are a professional vedic astrologer.
Use these birth details:
DOB: ${dob}
Birth Time: ${birthTime}
Birth Place: ${birthPlace}

Rules:
- Be positive and helpful.
- Only answer horoscope/astrology questions.
- If user asks unrelated things → reply: "Please use the AI Chat section."
        `,
        },
        ...formattedHistory,
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    const botReply = ai.choices[0].message?.content || "No response";

    // Save to DB
    await ChatHistory.create({
      userId,
      userMessage,
      botReply,
      queryType: "horoscope",
    });

    res.json({ reply: botReply });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "AI error" });
  }
};
