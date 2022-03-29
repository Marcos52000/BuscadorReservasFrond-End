import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

const baseUrl = 'https://buscadorreservas.herokuapp.com';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user: any;
  private user$: Subject<any>;

  constructor(private http: HttpClient) {
    this.user$ = new Subject();
  }

  signUp(data: any) {
    console.log(data);
    this.user = data;
    this.user$.next(this.user);
    return this.http.post(`${baseUrl}/login`, data);
  }

  getByName(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/users/${id}`);
  }

  add(data: any) {
    return this.http.post(`${baseUrl}/users`, data);
  }

  getUser$(): Observable<any> {
    return this.user$.asObservable();
  }
}
