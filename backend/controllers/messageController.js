import Message from '../schemas/Message.js';

// @desc   Get all messages
// @route  GET /
export const getMsgs = async (req, res, next) => {
    try {
        const messages = await Message.find({});
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};

// @desc   Add new message
// @route  POST /new
export const addMsg = async (req, res, next) => {
    const { text, username } = req.body;

    if (!text) {
        return res
            .status(400)
            .json({ msg: 'Please enter the message you want to post' });
    }

    if (!username) {
        return res.status(400).json({ msg: 'Please enter your username' });
    }

    try {
        const newMsg = new Message({ text, username });
        await newMsg.save();
        res.status(201).json(newMsg);
    } catch (err) {
        console.error('Error saving message:', err.message);
        res.status(500).json({ error: 'Failed to save message' });
    }
};
