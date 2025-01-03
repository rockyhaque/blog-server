import { IUser } from '../user/user.interface'
import User from '../user/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ILoginUser } from './auth.interface'


const register = async (payload: IUser) => {
  const result = await User.create(payload)
  return result
}

const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password')

  if (!user) {
    throw new Error('User not found')
  }

  const isBlocked = user?.isBlocked
  if (isBlocked === true) {
    throw new Error('User is blocked')
  }

  const isPasswordMatch = await bcrypt.compare(payload.password, user.password)
  if (!isPasswordMatch) {
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign(
    {
      email: user?.email,
      role: user?.role,
    },
    'secret',
    {
      expiresIn: '1d',
    }
  )

  // console.log(token)

  const verifiedUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  }

  return { token, verifiedUser }

}

export const AuthService = {
  register,
  login,
}
