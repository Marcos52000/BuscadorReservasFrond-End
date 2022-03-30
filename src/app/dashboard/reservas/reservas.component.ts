import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva.model';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas:any = null;

  constructor(private http: HttpClient,private reservasService: ReservaService) { }

  ngOnInit(): void {
    this.reservasService.getReservas().subscribe(result => this.reservas = result);

  }

  delete(reserva:Reserva):void{
    this.reservasService.delete(reserva.id).subscribe(
      res=> this.reservasService.getReservas().subscribe(
        response=>this.reservas=response
      )
    )
  }
}
