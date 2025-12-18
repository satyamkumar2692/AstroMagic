// api/controllers/kundliController.js
import Groq from "groq-sdk"; // or use OpenAI SDK if you prefer
import { env } from "process";
// use server-side key from env!
const groq = new Groq({
  apiKey: env.GROQ_API_KEY,
});

/*
 Expected request body:
 {
   birthDatetime: "2025-11-21T14:30",
   birthPlace: "Hyderabad, India",
   lat: 17.3850,
   lon: 78.4867,
   timezone: 5.5,
   name: "Satyam",
   gender: "male"
 }
*/

export const generateKundliAI = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware
    const { birthDatetime, birthPlace, lat, lon, timezone, name, gender } =
      req.body;
    if (!birthDatetime || (!birthPlace && (!lat || !lon))) {
      return res
        .status(400)
        .json({ message: "Missing birth datetime/place or lat/lon" });
    }

    // Compose prompt that returns JSON only. Keep schema stable.
    const prompt = `
You are an expert Vedic astrologer. Given the birth details, produce a STEP-BY-STEP structured kundli/birth-chart JSON.

INPUT:
Name: ${name || "Unknown"}
Gender: ${gender || "unknown"}
Birth ISO: ${birthDatetime}
Place: ${birthPlace || ""} (lat:${lat || ""}, lon:${lon || ""})
Timezone: ${timezone || ""}

REQUIREMENTS:
1) Return JSON only, exactly in this schema:
{
  "meta": {
    "name": "<string>",
    "birthDatetime": "<ISO string>",
    "birthPlace": "<string>",
    "lat": <number>,
    "lon": <number>,
    "timezone": <number>
  },
  "houses": {
    "1": {"planets": ["Sun","Mars"], "lord": "Mars", "notes": "strength/uch/neecha/retro"},
    "2": {"planets": [], "lord": "Venus", "notes": ""},
    ...
    "12": {...}
  },
  "houseCusps": { "1": <deg>, "2": <deg>, ... "12": <deg> }, // optional degrees
  "summary": {
    "personality": "<short summary>",
    "specialNotes": "<special warnings or things to know>",
    "favColor": "<string>",
    "stones": ["Ruby", "Moonstone"],
    "remedies": ["Chant X", "Wear gemstone Y"]
  },
  "raw": { /* optional raw calculated data if available */ }
}

2) For every house's "notes" include planet dignity e.g. "Sun (own), Moon (neecha), Mars (exalted)" or short tags like "uch, neech, retro".
3) Make the "summary.personality" 2-3 sentences, neutral and professional.
4) For "specialNotes" include anything important the user should know for relationships/health/career as per the chart.
5) Keep JSON valid and compact (no extra explanation).
6) Use native planet names: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Rahu, Ketu.

Now, calculate the birth chart and output JSON following the schema above.
`;

    const ai = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // use appropriate, available model
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      response_format: { type: "json_object" },
    });

    // groq SDK with response_format/json_object often returns parsed object already, but safe-guard:
    const content = ai.choices?.[0]?.message?.content;
    const kundli = typeof content === "object" ? content : JSON.parse(content);

    // optional: store kundli in DB for the user (not required)
    // await KundliModel.create({ userId, kundli });

    return res.json({ kundli });
  } catch (err) {
    console.error("Kundli AI error:", err);
    return res.status(500).json({ message: "Failed to generate kundli" });
  }
};
