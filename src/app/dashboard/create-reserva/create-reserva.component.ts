import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/home/hotel.service';
import { ClienteService } from '../cliente.service';
import { Reserva } from '../reserva.model';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit {

  reserva:Reserva = new Reserva();


  constructor(private reservaService:ReservaService,private router:Router,private activateRoute:ActivatedRoute,private clienteService:ClienteService,private hotelService:HotelService) { }

  ngOnInit(): void {
    this.cargar();
  }

  create():void{
    const data= {
      fecha_entrada: this.reserva.fecha_entrada,
      fecha_salida: this.reserva.fecha_salida,
      importe: this.reserva.importe,
      cliente: {},
      hotel: {},
    };
    this.clienteService.getId(this.reserva.id_cliente).subscribe(
      data2=> {
        data.cliente = data2;
        this.hotelService.getId(this.reserva.id_hotel).subscribe(
          data3=> {
            data.hotel = data3;
            this.reservaService.create(data).subscribe(
              res=> this.router.navigate(['admin/reservas'])
            );
          }
        )
      }
    );
    console.log(this.reserva);

  }

  cargar():void{
    this.activateRoute.params.subscribe(
      e=>{
        console.log(this.reserva)
        let id=e['id'];
        if(id){
          this.reservaService.getId(id).subscribe(
            es=>this.reserva=es
          );
        }
      }
    )
  }

  update():void{
    console.log(this.reserva);
    this.reservaService.update(this.reserva).subscribe(
      res=>this.router.navigate(['admin/reservas'])
    );
  }
}
