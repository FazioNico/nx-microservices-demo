import { ITodo } from '../interfaces/todo.interface';

export class CreateTodoDto implements ITodo {
  readonly title: string;
}