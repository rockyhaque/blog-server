import { model, Schema } from 'mongoose'
import { IBlog } from './blog.interface'

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the blog'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content for the blog'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: [true, 'Please provide an author for the blog'],
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Blog = model<IBlog>('Blog', blogSchema)

export default Blog
