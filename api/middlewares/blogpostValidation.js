import { check } from 'express-validator/check';


const blogValidationRules = {

  create: [
    check('title')
      .isLength({ min: 2 })
      .withMessage('Must be at least 10 chars long'),
    
    check('category'),

    check('body')
    .isLength({ min: 100 })
    .withMessage('Must be at least 1000 chars long')
  ]
}

export default blogValidationRules;