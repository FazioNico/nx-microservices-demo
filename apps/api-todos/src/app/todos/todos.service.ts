import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDoc, ITodo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<TodoDoc>) {}

  async create(createTodoDto: CreateTodoDto): Promise<{todos: ITodo[]}> {
    const createdTodo = new this.todoModel(createTodoDto);
    const todo = await createdTodo.save().catch(err => err);
    if (todo instanceof Error)
      throw new BadRequestException(todo.message || 'Request failed');
    return {todos: [todo]}
  }

  async findAll(): Promise<{todos: TodoDoc[]}> {
    const todos =  await this.todoModel.find().exec().catch(err => err);;
    if (todos instanceof Error)
      throw new BadRequestException(todos.message || 'Request failed');
    return {todos};
  }

  async findById(_id: string): Promise<{todos: TodoDoc[]}> {
    const todos =  await this.todoModel.find({_id}).exec().catch(err => err);
    if (todos instanceof Error)
      throw new BadRequestException(todos.message || 'Request failed');
    return {todos};
  }
}
