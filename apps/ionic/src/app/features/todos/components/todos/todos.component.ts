import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreTodosComponent } from '@nx-microservices-demo/core-features/todos';

@Component({
  selector: 'nx-micro-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent extends CoreTodosComponent implements OnInit {

  constructor(_http: HttpClient) {
    super(_http);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('Get title from CoreComponent:', this.getTitle());
  }

}
