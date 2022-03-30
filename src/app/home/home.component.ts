import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from './hotel.service';
import { LoginService, User } from '../services/auth/login.service';
import { ReservaService } from '../dashboard/reserva.service';
import { ClienteService } from '../dashboard/cliente.service';
import { Reserva } from '../dashboard/reserva.model';
import { UserService } from '../services/auth/user.service';

const baseUrl = 'https://buscadorreservas.herokuapp.com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  hoteles:any = null;
  username :any = null;
  coso:any = null;
  reserva:Reserva = new Reserva();

  constructor(private userService: UserService,private reservaService:ReservaService,private router:Router,private activateRoute:ActivatedRoute,private clienteService:ClienteService,private hotelService:HotelService) {}

  ngOnInit() {

    this.hotelService.getHoteles().subscribe(result => this.hoteles = result);
    this.username= window.sessionStorage.getItem("auth-email");
    console.log(this.username);

  }

  logOut(): void {
    window.sessionStorage.removeItem("auth-email");
    window.location.reload();
  }
  create():void{
    this.coso= this.userService.getByName(this.username);
    console.log(this.coso);
    const data= {
      fecha_entrada: this.reserva.fecha_entrada,
      fecha_salida: this.reserva.fecha_salida,
      importe: this.reserva.importe,
      cliente: {},
      hotel: {},
    };
    this.clienteService.getId(3).subscribe(
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
}
