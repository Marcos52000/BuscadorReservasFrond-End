import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginI} from '../modelos/login.interface';
import {ResponseI} from '../modelos/reponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  url:string="https://buscadorreservas.herokuapp.com/";

  constructor(private http : HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "home";
    return this.http.post<ResponseI>(direccion,form);
  }

}
