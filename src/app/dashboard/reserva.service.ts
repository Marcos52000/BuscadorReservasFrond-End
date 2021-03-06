import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva.model';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  private url:string="https://buscadorreservas.herokuapp.com/api/reservas"

  constructor(private http:HttpClient) { }

  getReservas():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.url);
  }

  create(reserva:Reserva):Observable<Reserva>{
    return this.http.post<Reserva>(this.url,reserva);
  }

  getId(id?:number):Observable<Reserva>{
    return this.http.get<Reserva>(this.url+'/'+id);
  }

  update(reserva:Reserva,id?:number):Observable<Reserva>{
    return this.http.put<Reserva>(this.url+'/'+id,reserva);
  }

  delete(id?:number):Observable<Reserva>{
    return this.http.delete<Reserva>(this.url+'/'+id);
  }
}
