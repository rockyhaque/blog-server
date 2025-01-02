import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BlogControllers } from './blog.controller'
import { BlogValidation } from './blog.validation'

const blogRouter = express.Router()

blogRouter.post(
  '/',
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogControllers.createBlog
)

export default blogRouter
