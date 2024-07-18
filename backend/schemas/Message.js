import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    published: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
});

export default mongoose.model('Message', messageSchema);
