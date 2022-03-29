import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:any = null;

  constructor(private http: HttpClient,private clientesService: ClienteService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(result => this.clientes = result);

  }

  delete(cliente:Cliente):void{
    this.clientesService.delete(cliente.id).subscribe(
      res=> this.clientesService.getClientes().subscribe(
        response=>this.clientes=response
      )
    )
  }
}
