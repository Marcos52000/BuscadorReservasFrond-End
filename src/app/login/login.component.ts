import { Component, OnInit } from '@angular/core';
import {ApiRestService} from'../services/api-rest.service';
import { LoginI } from '../modelos/login.interface';
import { Router } from '@angular/router'; '@angular/route';
import { ResponseI } from '../modelos/reponse.interface';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = new FormGroup({
  usuario : new FormControl('',Validators.required),
  password : new FormControl('',Validators.required)
})


  constructor(private api: ApiRestService, private router:Router) { }

  ngOnInit(): void {  }

onLogin(form:LoginI){
  console.log(form);
  this.api.loginByEmail(form).subscribe(data=>{
    let dataResponse:ResponseI = data;
    if(dataResponse.status=="ok"){
      console.log(dataResponse.result.token);
      localStorage.setItem("token",dataResponse.result.token);
      this,this.router.navigate(['home']);
    }
  })
}

}
