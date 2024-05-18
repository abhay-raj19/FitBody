import mongoose from "mongoose";
const categories=[
  'Exercises',
  'Diet plan',
  'Mental Health and Wellness',
  'Trends and Research',
  'Success Stories',
  'Expert Advice',
  'Other'
]
const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
       type:String,
       enum:categories,
       required:true
    }
},{timestamps:true})

const Blog=mongoose.model('Blog',blogSchema)
export default Blog;