import * as mongoose from 'mongoose';
import { TodoDoc } from '../interfaces/todo.interface';

export const todoSchema = new mongoose.Schema<TodoDoc>({
  title: String
});