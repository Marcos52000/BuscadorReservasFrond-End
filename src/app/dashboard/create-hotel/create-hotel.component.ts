import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/home/hotel.model';
import { HotelService } from 'src/app/home/hotel.service';


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel:Hotel = new Hotel();


  constructor(private hotelService:HotelService,private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.hotel);
    this.hotelService.create(this.hotel).subscribe(
      res=> this.router.navigate(['/hoteles'])
    );
  }

}
