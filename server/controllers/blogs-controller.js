import Blog from "../models/blog-model.js";
import User from "../models/user-model.js";
import mongoose from "mongoose";
export const addBlog = async (req, res) => {
    try {
        const userID = req.id;
        const { title, description, category } = req.body;
        if (!title || !description || !category) {
            return res.status(400).json({ message: "Please Enter all the Feilds", success: false });
        }
        const user = await User.findById(userID)
        const blog = new Blog({
            title,
            description,
            author:userID,
            category
        })

        const session = await mongoose.startSession()
        session.startTransaction()


        if (!blog || !user) {
            return res.status(500).json({ message: "internal server error", err, success: false })
        }

        user.blogs.push(blog._id)
        await user.save({ session })
        await blog.save({ session })
        await session.commitTransaction()

        return res.status(200).json({message:'blog created sucessfully.',success:true,blog})
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", err, success: false })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        let blog = await Blog.findByIdAndDelete(id).populate("author");

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found.', success: false });
        }

        if (blog.author) {
            await blog.author.blogs.pull(blog._id);
            await blog.author.save();
        }

        return res.status(200).json({ message: 'Blog deleted successfully.', success: true });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", err, success: false });
    }
}

export const showAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate({
            path: 'author',
            select: 'name'
        })
        if (!blogs) {
            return res.status(500).json({ message: 'internal server error.', success: false })
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            message: "All blogs list",
            blogs
        })
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error", err, success: false });
    }
}

export const getBlog=async(req,res)=>{
    try{
    const {id}=req.params;
    const blog = await Blog.findById(id).populate({
        path: 'author',
        select: 'name'
    })
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "blog not found with this ID",
            })
        }
        return res.status(200).send({
            success: true,
            message: "blog fetched successfully!",
            blog
        })
    }
    catch(err)
    {
        return res.status(500).json({ message: "Internal server error", err, success: false });
    }
}

export const getUserBlogs=async(req,res)=>{
   try{
   const userID=req.id;
   const userBlogs=await User.findById(userID).populate('blogs')
   if(!userBlogs)
    {
        return res.status(500).json({ message: 'internal server error.', success: false })
    }
    const {blogs}=userBlogs
    return res.status(200).json({
        success: true,
        BlogCount: blogs.length,
        message: "All blogs list",
        blogs
    })
   }
   catch(err)
   {
    return res.status(500).json({ message: "Internal server error", err, success: false });
   }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!updateData || Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: "Update data is required.", success: false });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found.", success: false });
        }

        return res.status(200).json({ message: "Blog updated successfully.", success: true, updatedBlog });

    } catch (err) {
        return res.status(500).json({ message: "Internal server error", err, success: false });
    }
}

export const getBlogsByCategory=async(req,res)=>{
    try{
      let {category}=req.params
      category=decodeURIComponent(category)
       
      const blogs = await Blog.find({ category });
      if(!blogs)
        {
            return res.status(404).json({ message: "No blogs found.", success: false });
        }
        return res.status(200).json({
            success: true,
            BlogCount: blogs.length,
            message: `Blogs of category ${category}`,
            blogs
        })
    }
    catch(err)
    {
        return res.status(500).json({ message: "Internal server error", err, success: false });
    }
}