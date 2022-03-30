import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente:Cliente = new Cliente();


  constructor(private clienteService:ClienteService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  create():void{
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      res=> this.router.navigate(['admin/clientes'])
    );
  }

  cargar():void{
    this.activateRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.clienteService.getId(id).subscribe(
            es=>this.cliente=es
          );
        }
      }
    )
  }

  update():void{
    console.log(this.cliente);
    this.clienteService.update(this.cliente).subscribe(
      res=>this.router.navigate(['admin/clientes'])
    );
    this.router.navigate(['admin/hoteles'])
  }

}
