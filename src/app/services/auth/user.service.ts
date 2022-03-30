import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url:string=" https://buscadorreservas.herokuapp.com/users";
  constructor(private http: HttpClient) {}

  getById(id: string) {

    return this.http.get(
      `https://buscadorreservas.herokuapp.com/users${id}`
    );
  }
  getByName(name:string){
    console.log(this.url);
    console.log(this.url+'/'+name);
    return this.http.get(this.url+'/'+name);
  }
  update(id: any, data: any) {
    return this.http.put(
      `${`https://buscadorreservas.herokuapp.com/users`}/${id}`,
      data
    );
  }
}
