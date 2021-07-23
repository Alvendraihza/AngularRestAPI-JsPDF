import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public http:HttpClient) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}