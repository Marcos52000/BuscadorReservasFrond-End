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

  login(email: string, pass_email: string): Observable<any>
  {
    return this.http.post(AUTH_API + 'login', {
      email,
      pass_email
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

  addemail(email: string, pass_email: string, rol: object): Observable<any>
  {
    return this.http.post(AUTH_API + `emails/`, {
      email,
      pass_email,
      rol
    }, httpOptions);
  }

  deleteemail(id: any): Observable<any>
  {
    return this.http.delete(AUTH_API + `emails/${id}/`, httpOptions);
  }
}
