import mongoose from "mongoose"; //Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB

const connectDB = (url) =>{ //arrow function that accept url
    mongoose.set('strictQuery',true); //this will useful for the search functionality later on

    mongoose.connect(url) //connecting database
    .then(()=> console.log('MongoDB connected'))
    .catch((err) => console.log(err));

}

export default connectDB;