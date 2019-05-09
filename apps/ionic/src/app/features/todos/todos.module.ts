import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    IonicModule
  ]
})
export class TodosModule { }
