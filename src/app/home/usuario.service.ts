import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string="https://buscadorreservas.herokuapp.com/users"

  constructor(private http:HttpClient) { }

  getByName(email:string):Observable<Usuario>{
    console.log(this.url);
    console.log(this.url+'/'+email);
    return this.http.get<Usuario>(this.url+'/'+email);
  }

}
