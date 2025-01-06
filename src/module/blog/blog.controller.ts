import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { blogServices } from './blog.service'
import { JwtPayload } from 'jsonwebtoken'

const createBlog = catchAsync(async (req, res) => {
  const userId = (req.user as JwtPayload).id
  const result = await blogServices.createBlog(req.body, userId)

  const filteredResult = {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: result.author,
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: filteredResult,
  })
})

const getBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getBlogs(req.query)

  const filteredResult = result.map((blog) => ({
    _id: blog._id,
    title: blog.title,
    content: blog.content,
    author: blog.author,
  }))

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blogs fetched successfully',
    data: filteredResult,
  })
})

const getSingleBlog = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await blogServices.getSingleBlog(id)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog fetched successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.id
  const authorId = (req.user as JwtPayload).id
  const userRole = (req.user as JwtPayload).role
  const body = req.body
  // console.log(body)
  const result = await blogServices.updateBlog(id, authorId, userRole, body)

  // Check if result is null or undefined
  if (!result) {
    return sendResponse(res, {
      success: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Blog not found or update failed',
      data: null,
    })
  }

  const filteredResult = {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: result.author,
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: filteredResult,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id
  const authorId = (req.user as JwtPayload).id
  const userRole = (req.user as JwtPayload).role

  await blogServices.deleteBlog(id, authorId, userRole)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    // data: {},
  })
})

export const BlogControllers = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
