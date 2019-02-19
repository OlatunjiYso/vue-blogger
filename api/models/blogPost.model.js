import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define collection and schema for post

let Post = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  category: {
    type: String
  },
  tags: {
    type: String
  }
}, {
  collection: 'posts'
})

 const postModel = mongoose.model('Post', Post);

 export default postModel;