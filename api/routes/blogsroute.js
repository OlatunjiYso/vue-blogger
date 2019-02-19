import express from 'express';
import blogPostController from '../controllers/blogposts';
import blogPostValidation from '../middlewares/blogpostValidation'
import validatorCheck from '../middlewares/validatorCheck';


 const blogpostRoute = express.Router();

// Route and controller for saving a post.
blogpostRoute.route('/add')
  .post(
    blogPostValidation.create,
    validatorCheck.enforceValidations,
    blogPostController.addPost
    )
   
// Route and controller for getting all posts
blogpostRoute.route('/')
  .get(blogPostController.getAllBlogPosts);

// Route and controller for getting a post
blogpostRoute.route('/:id')
  .get( blogPostController.getABlogPost)

// Route and controller for updating a post
blogpostRoute.route('/:id')
  .put(blogPostController.updateBlogPost);

// Route and controller for updating a post
blogpostRoute.route('/:id')
  .delete(blogPostController.deletePost);

  export default blogpostRoute;