import mongoose from "mongoose";

const chatHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userMessage: {
      type: String,
      required: true,
    },
    botReply: {
      type: String,
    },
    queryType: {
      type: String,
      enum: ["horoscope", "kundli", "general"],
      default: "general",
    },
  },
  { timestamps: true }
);

const ChatHistory = mongoose.model("Chat", chatHistorySchema);
export default ChatHistory;
