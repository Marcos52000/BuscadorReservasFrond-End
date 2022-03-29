import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelService } from 'src/app/home/hotel.service';
import { Subject } from 'rxjs';
import { Hotel } from 'src/app/home/hotel.model';


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

  delete(hotel:Hotel):void{
    this.hotelService.delete(hotel.id).subscribe(
      res=> this.hotelService.getHoteles().subscribe(
        response=>this.hoteles=response
      )
    )
  }



}
