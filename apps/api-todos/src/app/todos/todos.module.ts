import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './schemas/todo.schema';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: todoSchema }])
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
