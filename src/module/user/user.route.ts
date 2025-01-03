import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
import { UserControllers } from './user.controller'
import auth from '../../middlewares/auth'


const userRouter = Router()

userRouter.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser
)
userRouter.get('/:userId', UserControllers.getSingleUser)
userRouter.put('/:userId', UserControllers.updateUser)
userRouter.delete('/:userId', UserControllers.deleteUser)
userRouter.get('/', UserControllers.getUsers)

// Admin routes
userRouter.patch('/:userId/block', auth("admin"), UserControllers.blockUser)

export default userRouter;