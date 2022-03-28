import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel.model';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url:string="https://buscadorreservas.herokuapp.com/api/hoteles"

  constructor(private http:HttpClient) { }

  getHoteles():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.url);
  }
}
