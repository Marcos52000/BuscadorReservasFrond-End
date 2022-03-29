import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://buscadorreservas.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, contrasena: string): Observable<any>
  {
    return this.http.post(AUTH_API + 'login', {
      email,
      123456
    }, httpOptions);
  }

  getemail(email: string): Observable<any>
  {
    return this.http.get(AUTH_API + `emails/${email}/`, httpOptions);
  }

  getemails(): Observable<any>
  {
    return this.http.get(AUTH_API + `emails/`, httpOptions);
  }

  addemail(email: string, contrasena: string, rol: object): Observable<any>
  {
    return this.http.post(AUTH_API + `emails/`, {
      email,
      contrasena,
      rol
    }, httpOptions);
  }

  deleteemail(id: any): Observable<any>
  {
    return this.http.delete(AUTH_API + `emails/${id}/`, httpOptions);
  }
}
