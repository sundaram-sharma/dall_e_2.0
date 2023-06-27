import mongoose from 'mongoose';

const Post = new mongoose.Schema({ //creating the schema for the post
    name: {type:String, required: true},
    prompt: {type:String, required: true},
    photo: {type:String, required: true}
})

 const  PostSchema = mongoose.model('Post',Post); //creating model from the schema

 export default PostSchema;