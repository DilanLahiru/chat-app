import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Check for duplicate message
    const existingMessage = await Message.findOne({ senderId, receiverId, message });
    if (existingMessage) {
      return res.status(200).json(existingMessage);
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save(); // Ensure the message is saved first

    conversation.messages.push(newMessage._id);
    await conversation.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in message controller:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};


export const getMessage = async (req, res) => {
  try {
    const {id: userToChatId} = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);

  } catch (error) {
    console.error("Error in get message controller:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
