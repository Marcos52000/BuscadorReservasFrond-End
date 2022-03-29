import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string="https://buscadorreservas.herokuapp.com/api/hoteles"

  constructor(private http:HttpClient) { }

  getHoteles():Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.url);

  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,cliente);
  }

  getId(id?:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/'+id);
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'/'+cliente.id,cliente);
  }

  delete(id?:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/'+id);
  }
}
