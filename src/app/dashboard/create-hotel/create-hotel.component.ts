import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { Router } from '@angular/router';
import { Hotel } from 'src/app/home/hotel.model';
import { HotelService } from 'src/app/home/hotel.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }
=======
  hotel:Hotel = new Hotel();


  constructor(private hotelService:HotelService,private router:Router) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  create():void{
    console.log(this.hotel);
    this.hotelService.create(this.hotel).subscribe(
      res=> this.router.navigate(['/hoteles'])
    );
  }

>>>>>>> Stashed changes
}
