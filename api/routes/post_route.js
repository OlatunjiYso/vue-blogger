import express from 'express';
import { postModel } from '../models/blogPost.model';
import { check, validationResult } from 'express-validator/check';
import BlogPosts from '../controllers/blogposts';
export const postRoute = express.Router();

// Route and controller for saving a post.
postRoute.route('/add')
  .post(
    [
      check('title')
        .isLength({ min: 3 })
        .withMessage('Title cannot be less than 3 characters')
      ,
      check('body')
        .isLength({ min: 20 })
        .withMessage('blog body cannot be less than 20 characters')
    ],
     (req, res) => {
      var errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ err: errors.array()[0].msg});
      }
    })

// Route and controller for getting all posts
postRoute.route('/')
  .get((req, res) => {
    postModel.find((err, posts) => {
      if (err) {
        res.json(err);
      }
      res.json(posts)
    });
  });

// Route and controller for getting a post
postRoute.route('/details/:id')
  .get((req, res) => {
    let id = req.params.id;
    postModel.findById(id, (err, post) => {
      if (err) {
        res.status(404).json(err);
      }
      res.status(200).json(post);
    })
  })

// Route and controller for updating a post
postRoute.route('/update/:id')
  .post((req, res) => {
    let id = req.params.id;
    postModel.findById(id, (err, blogPost) => {
      if (err) {
        res.status(503).json({ msg: 'internal server error' })
      }
      else {
        if(!blogPost) {
          res.status(404).json({msg: 'blogPost not found'});
        }
        post.title = req.body.title;
        post.body = req.body.body;
        post.save().then(() => {
          res.status(201).json({ msg: 'update complete' })
        })
          .catch(() => {
            res.status(400).json({ msg: 'unable to update post' })
          });
      }
    });
  });

// Route and controller for updating a post
postRoute.route('/delete/:id')
  .delete((req, res) => {
    postModel.findByIdAndRemove({ _id: req.params.id }, (err) => {
      if (err) res.json(err);
      else res.json('post successfully removed');
    });
  });