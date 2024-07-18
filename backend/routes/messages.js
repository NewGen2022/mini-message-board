import express from 'express';
import { getMsgs, addMsg } from '../controllers/messageController.js';

const router = express.Router();

// Get all messages
router.get('/', getMsgs);

// Add new message
router.post('/new', addMsg);

export default router;
