import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
import { UserControllers } from './user.controller'

const userRouter = Router()

userRouter.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser
)
userRouter.get('/:userId', UserControllers.getSingleUser)
userRouter.put('/:userId', UserControllers.updateUser)
userRouter.delete('/:userId', UserControllers.deleteUser)

// authorization 
userRouter.get('/', UserControllers.getUsers)

export default userRouter;