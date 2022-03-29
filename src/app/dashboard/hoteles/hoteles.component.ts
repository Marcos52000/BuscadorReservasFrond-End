import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelService } from 'src/app/home/hotel.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  hoteles:any = null;

  constructor(private http: HttpClient,private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHoteles().subscribe(result => this.hoteles = result);

  }




}
