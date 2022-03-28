import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hoteles:any = null;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHoteles().subscribe(result => this.hoteles = result);
  }
}
