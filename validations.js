import { body } from 'express-validator';

export const loginValidation = [
   body('email', 'Invalid mail format').isEmail(),
   body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
]

export const registerValidation = [
   body('email', 'Invalid mail format').isEmail(),
   body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
   body('fullName', 'Name must be at least 3 characters').isLength({ min: 3 }),
   body('avatarUrl', "Wrong avatar link").optional().isURL(),
]

export const postCreateValidation = [
   body('title', 'Enter article title').isLength({ min: 3 }).isString(),
   body('text', 'Enter article text').isLength({ min: 10 }).isString(),
   body('tags', 'Enter article tags').optional().isString(),
   body('imageUrl', "Wrong image link").optional().isString(),
]