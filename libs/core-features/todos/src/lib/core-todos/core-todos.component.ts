import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export abstract class CoreTodosComponent implements OnInit {

  public title  = 'TodoList'
  public todos$: Observable<any[]>;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._loadDatas();
  }

  private _loadDatas() {
    this.todos$ = this._http.get('/api/todos/').pipe(
      tap((res: any) => console.log('Load data from core component: ', res)),
      map((res: {todos: any[]}) => res.todos)
    );
  }

  getTitle() {
    return this.title;
  }
}
