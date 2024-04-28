import mongoose from 'mongoose';

const creatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    videos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        default: []
    },
    
});

const Creator = mongoose.model('creators', creatorSchema);