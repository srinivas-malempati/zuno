export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "No message provided" });

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 200,
        messages: [
          {
            role: "system",
            content: `You are Zuri, a super cheerful and encouraging AI tutor for young kids aged 5-7.
Rules:
- Use VERY simple words a 5-7 year old understands
- Always be warm, kind, and encouraging
- Use emojis generously 🌟
- Keep replies SHORT — 2 to 3 sentences MAX
- Use Indian names and culture naturally (cricket, diwali, dadi, samosas, rupees)
- NEVER make the child feel bad or wrong
- Always celebrate effort first, then help
- For math questions: solve step by step very simply
- For spelling questions: break into individual letters with spaces`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "Ask me anything! 🌟";
    res.status(200).json({ reply });
  } catch (err) {
    console.error("Groq error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
