import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/home/hotel.model';
import { HotelService } from 'src/app/home/hotel.service';


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel:Hotel = new Hotel();


  constructor(private hotelService:HotelService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  create():void{
    console.log(this.hotel);
    this.hotelService.create(this.hotel).subscribe(
      res=> this.router.navigate(['admin/hoteles'])
    );
  }

  cargar():void{
    this.activateRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.hotelService.getId(id).subscribe(
            es=>this.hotel=es
          );
        }
      }
    )
  }

  update():void{
    console.log(this.hotel);
    this.hotelService.update(this.hotel).subscribe(
      res=>this.router.navigate(['admin/hoteles'])
    );
  }

}
