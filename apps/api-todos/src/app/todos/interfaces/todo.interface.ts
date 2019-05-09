import { Document } from 'mongoose';

export interface ITodo {
  readonly title: string;
}

export interface TodoDoc extends ITodo, Document {}