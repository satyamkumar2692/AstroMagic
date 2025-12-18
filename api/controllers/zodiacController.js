import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

export const dailyZodiac = async (req, res) => {
  try {
    const { sign } = req.body;
    if (!sign) {
      return res.status(400).json({ message: "Zodiac sign is required" });
    }

    const prompt = `
Give a short daily horoscope for ${sign}.
Give exactly 3 interesting short facts about this zodiac sign.
Return STRICT JSON ONLY:
{
 "horoscope": "string",
 "facts": ["string 1", "string 2", "string 3"]
}
`;

    const ai = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    let raw = ai.choices?.[0]?.message?.content;
    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {};
    }

    // 💡 Normalize the "facts" field
    let facts = parsed.facts;

    if (Array.isArray(facts)) {
      // ok
    } else if (typeof facts === "object" && facts !== null) {
      // convert object → array
      facts = Object.values(facts);
    } else if (typeof facts === "string") {
      // convert string → array
      facts = [facts];
    } else {
      facts = [
        "You have a unique charm.",
        "You carry deep inner strength.",
        "Your intuition guides your life.",
      ];
    }

    // 💡 Guarantee 3 facts
    if (facts.length < 3) {
      while (facts.length < 3)
        facts.push("They possess strong personality traits.");
    }

    const safeJson = {
      horoscope:
        parsed.horoscope ||
        "Today brings calm energy. Stay open to good opportunities.",
      facts,
    };

    return res.json(safeJson);
  } catch (err) {
    console.log("Daily Zodiac Error:", err);
    return res.status(500).json({ message: "AI failed" });
  }
};
