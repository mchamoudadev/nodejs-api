import express from 'express';
import {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} from '../controllers/postController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// old version
// router.post('/', authenticate, createPost);

router.route('/')
    .get(getAllPosts)
    .post(authenticate, createPost);

router.route('/:id')
    .get(getPostById)
    .put(authenticate, updatePost)
    .delete(authenticate, deletePost);

export default router;


