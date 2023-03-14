
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MongoURI = 'mongodb+srv://hazemalhegazy:445814GG@cluster0.6xbjn9x.mongodb.net/?retryWrites=true&w=majority' ;

mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
})
const userSchema = new Schema({
  id:{
    type:Number,
  
  },
  Name: {
    type: String,
    
  },
  Username:{
    type: String,
  },
  Email: {
    type: String,
    
  },
  Password: {
    type: String,
  },
  Gender: {
    type: String,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;