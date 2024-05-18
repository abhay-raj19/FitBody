import express from 'express'
import { addBlog, deleteBlog, getBlog, getBlogsByCategory, getUserBlogs, showAllBlogs, updateBlog } from '../controllers/blogs-controller.js';
import isUserAuthenticated from '../middleware/authMiddleware.js';


const router=express.Router()

router.post('/',isUserAuthenticated,addBlog)
router.delete('/:id',deleteBlog)
router.get('/',showAllBlogs)
router.get('/:id',getBlog)
router.get('/getuserblogs',isUserAuthenticated,getUserBlogs)
router.put('/:id',isUserAuthenticated,updateBlog)
router.get('/getbycategory/:category',getBlogsByCategory)

export default router;