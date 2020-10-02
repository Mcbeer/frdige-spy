import { Request } from 'express';
import { User } from './User.model';

export interface ExtendedRequest extends Request {
  user: User;
}