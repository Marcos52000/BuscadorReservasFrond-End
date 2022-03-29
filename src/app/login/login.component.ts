import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any = 'token inicial';

  login: any = {
    email: '',
    password: '',
  };

  submitted = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  logUser(): void {
    const data = {
      email: this.login.email,
      password: this.login.password,
    };

    this.loginService.signUp(data)
      .subscribe(
        response => {
          this.token = response;
          this.submitted = true;
          console.log(response);
          if (this.login.email == "Albert" || this.login.email == "admin") {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
          window.sessionStorage.setItem("auth-token", this.token.token);
          window.sessionStorage.setItem("auth-email", this.login.email);

        },
        error => {
          console.log(error);
          alert("Usuario o contraseña incorrecta")
        });
  }
}
