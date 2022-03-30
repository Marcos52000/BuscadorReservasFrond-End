import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../reserva.model';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit {

  reserva:Reserva = new Reserva();


  constructor(private reservaService:ReservaService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  create():void{
    console.log(this.reserva);
    this.reservaService.create(this.reserva).subscribe(
      res=> this.router.navigate(['admin/hoteles'])
    );
  }

  cargar():void{
    this.activateRoute.params.subscribe(
      e=>{
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
