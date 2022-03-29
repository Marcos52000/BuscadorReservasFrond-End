import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get(
      `https://buscadorreservas.herokuapp.com/users${id}`
    );
  }

  update(id: any, data: any) {
    return this.http.put(
      `${`https://buscadorreservas.herokuapp.com/users`}/${id}`,
      data
    );
  }
}
