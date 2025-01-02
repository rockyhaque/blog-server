import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BlogControllers } from './blog.controller'
import { BlogValidation } from './blog.validation'

const blogRoutes = express.Router()

blogRoutes.post(
  '/create-blog',
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogControllers.createBlog
)

export default blogRoutes
