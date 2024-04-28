import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true,  
    },
    tags:[
        {
            type:String,
            required:true,
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now,
    },
    src:{
        type:String,
    },
    thumbnail:{
        type:String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "creator",
    },
})

const Video =mongoose.model("Video",videoSchema);
export default Video;