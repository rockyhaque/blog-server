import QueryBuilder from '../../builder/QueryBuilder'
import { IBlog } from './blog.interface'
import Blog from './blog.model'

const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload)
  return result
}

const getBlogs = async (query: Record<string, unknown>) => {
  // const result = await Blog.find({})
  const searchableFields = ['title', 'content']
  const tours = new QueryBuilder(Blog.find(), query)
    .search(searchableFields)
    .filter()
    .paginate()
    .sort()
    .select()

  const result = await tours.modelQuery
  return result
}

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id)
  return result
}

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  // console.log(id, payload)
  const result = await Blog.findByIdAndUpdate(id, payload)
  return result
}

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

export const blogServices = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
