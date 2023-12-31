import mongoose from "mongoose";

const messagesCollection = 'messages';

const messagesSchema = new mongoose.Schema({
    user_name: String,
    messages: String
});

export const messagesModel = mongoose.model(messagesCollection, messagesSchema);