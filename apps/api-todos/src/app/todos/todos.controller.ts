import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDoc } from './interfaces/todo.interface';

@Controller()
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Get('/hello')
  hello() {
    return {message: 'Hello Todos'}
  }

  @Get('/todos')
  async getAll(): Promise<{todos: TodoDoc[]}> {
    return this.service.findAll();
  }

  @Get('/todos/:id')
  async getById(@Param() {id = null}: {id: string}): Promise<{todos: TodoDoc[]}> {
    if (!id){
      throw new BadRequestException('Request params must have an ID');
    }
    return this.service.findById(id);
  }
}
