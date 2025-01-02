import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.service";

const createBlog = catchAsync(async(req, res) => {
    const result = await blogServices.createBlog(req.body);

    sendResponse(res, {
        status: true,
        statusCode: StatusCodes.CREATED,
        message: "Blog created successfully",
        data: result
    })
})

export const BlogControllers = {
    createBlog
}