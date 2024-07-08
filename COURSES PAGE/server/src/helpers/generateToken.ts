//generateToken.ts
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';
import { UserDTO } from '../dto/userDTO';
import { config } from '../config/config';

export const generateToken = (user: IUser): UserDTO => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    config.jwtSecret,
    { expiresIn: '1h' }
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
};