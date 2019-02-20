import mongoose from 'mongoose';

import BlogPost from '../models/blogPost.model';


/**
 * A class to house all controllers for CRUDing blog posts
 */

class BlogPosts {


 /**
  * Method to create a new blog post in db
  * @param {object} req - request object from the client
  * @param {object} res - response object from the server
  */
  static addPost(req, res) {
    let newBlogPost = new BlogPost(req.body)
    newBlogPost.save()
      .then(()=> {
        res.status(201).json({ msg: 'blogpost successfully created' })
      })
      .catch(()=>{
        res.status(501).json({ msg: 'internal server error' })
      })
  }

  /**
   * Method to fetch all blogPosts
   * @param {object} req - request object from the client
   * @param {*} res - response object from the server
   * 
   * @return {nill}
   */
  static getAllBlogPosts(req, res) {
    BlogPost.find((err, blogPosts)=> {
      if(err) {
        res.status(501).json({msg: 'no blogpost added yet'})
      } else {
        res.status(200).json({ 
          msg: 'blog posts successfully found',
          blogPosts
        })
      }
    })
  }

/**
 * A method to find a specified blogPost
 * @param {object} req - request object from server
 * @param {object} res - response object from server
 * 
 * @return {nill}
 */
static getABlogPost(req, res) {
  let id = req.params.id;
  BlogPost.findById(id, (err, blogPost)=> {
    if(err) {
      res.status(404).json({msg: 'blog post not found'});
    } else {
      res.status(200).json({
        msg: 'blogPost found',
        blogPost
      })
    }
  })
  }

/**
 *  A method update blogposts
 * @param {object} req request object from client
 * @param {*} res response object from server
 * 
 * @return {nill} not a method that return a data type.
 */
static updateBlogPost(req, res) {
  let id = req.params.id;
  BlogPost.findById(id, (err, blogPost)=> {
    if(err) {
      res.status(501).json({msg: 'blogPost not found'});
    } else {
      BlogPost.updateOne({ _id: mongoose.Types.ObjectId(id) },req.body)
      .then((success)=> {
        res.status(200).json({
          msg: 'blogpost updated!',
          mongooseMsg: success,
          blogPost
        });
      })
      .catch((err)=> {
        res.status(503).json({
          msg: 'internal server error',
          err
        });
      })
    }
  })
}

/**
 * A method to delete a blogpost
 * @param {object} req  - request object from the client
 * @param {*} res  response object from the server
 */
static deletePost(req, res) {
  let id = req.params.id;
  BlogPost.findById(id, (err, blogPost)=> {
    if(err) {
      res.status(501).json({msg: 'no blogpost found'})
    } else {
      BlogPost.findByIdAndRemove({ _id: id }, (err) => {
        if (err) res.json(err);
        else res.status(200).json({msg: 'post successfully removed'});
      })
    }
  })
}

}

export default BlogPosts;