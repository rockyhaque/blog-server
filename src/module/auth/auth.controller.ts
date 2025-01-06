import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body)

  const filteredResult = {
    _id: result._id,
    name: result.name,
    email: result.email
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User registered successfully',
    data: filteredResult,
  })
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Login successful',
    // token: result.token,
    // data: result.verifiedUser,
    data: {
      token: result.token,
    }
  })
})

export const AuthController = {
  register,
  login,
}
