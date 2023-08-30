import asyncHandler from 'express-async-handler';
import Post from '../models/Post.js';


export const createPost = asyncHandler(async (req, res) => {
    const newPost = new Post({ ...req.body, user: req.user._id });
    await newPost.save();
    res.status(201).send(newPost);
});

export const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate('user', 'username');  // populate the user's username
    res.send(posts);
});

export const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id).populate('user', 'username');
    if (!post) {
        throw new Error('Post not found');
    }
    res.send(post);
});

export const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        throw new Error('Post not found');
    }
    if (post.user.toString() !== req.user._id.toString()) {
        throw new Error('User not authorized to update this post');
    }
    Object.assign(post, req.body);
    await post.save();
    res.send(post);
});

export const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        throw new Error('Post not found');
    }
    if (post.user.toString() !== req.user._id.toString()) {
        throw new Error('User not authorized to delete this post');
    }
    await post.remove();
    res.send({ message: 'Post deleted successfully' });
});
