import ChatHistory from "../models/chat.model.js";

export const addChatMessage = async (req, res) => {
  try {
    const { userMessage, botReply, queryType } = req.body;
    const userId = req.userId;

    if (!userMessage) {
      return res.status(400).json({ message: "User message is required" });
    }

    const chat = new ChatHistory({
      userId,
      userMessage,
      botReply,
      queryType,
    });

    await chat.save();

    res.status(201).json({ status: "success", chat });
  } catch (err) {
    console.log("Error saving chat:", err);
    res.status(500).json({ message: "Failed to save chat" });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const userId = req.userId;

    const chats = await ChatHistory.find({ userId })
      .sort({ createdAt: -1 })
      .limit(50); // Return last 50 messages

    res.status(200).json({ status: "success", chats });
  } catch (err) {
    console.log("Error fetching history:", err);
    res.status(500).json({ message: "Failed to fetch chat history" });
  }
};
