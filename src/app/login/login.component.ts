import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/auth/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {
    email: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  msg = '';
  rol: string | null = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    if(window.sessionStorage.getItem("auth-token"))
    {
      this.isLoggedIn = true;
      this.rol = window.sessionStorage.getItem("auth-rol");
      this.login.email = window.sessionStorage.getItem("auth-email");
    }
  }

  logUser(): void {
    this.userService.login(this.login.email, this.login.password).subscribe(response => {

          window.sessionStorage.setItem("auth-token", response.token);
          window.sessionStorage.setItem("auth-email", this.login.email);

          this.isLoginFailed = false;
          this.isLoggedIn = true;

          this.recogerRol();
        },
        error => {
          this.isLoginFailed = true;
          if("Http failure response for https://buscadorreservas.herokuapp.com/login: 403 OK" == error.message)
          {
            this.errorMessage = 'Usuario y/o Contraseña Incorrectos';
          }
        });
  }

  recogerRol(): void
  {
    this.userService.getemail(this.login.email)
    .subscribe(
      response => {
        window.sessionStorage.setItem("auth-rol", response.rol.nombre);
        window.location.reload();
      },
      error => {
        console.log(error.message);
      }
    );
  }

}
