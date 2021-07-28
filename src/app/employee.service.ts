import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // https://jsonplaceholder.typicode.com/users?id=1
  // getUsers() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }
}