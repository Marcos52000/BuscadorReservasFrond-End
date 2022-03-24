import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  n1: number = 0;
  mensaje: String = '';

  ngOnInit(): void {
  }
  comprovar(){
    if(this.n1 == 5){
      this.mensaje = "Suma correcta"
    }else{
      this.mensaje = "Número incorrecto"
    }
  }
}
