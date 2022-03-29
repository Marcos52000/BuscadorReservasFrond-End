import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelService } from 'src/app/home/hotel.service';
<<<<<<< Updated upstream
=======
import { Subject } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements  OnDestroy ,OnInit {

  hoteles:any = null;
<<<<<<< Updated upstream

  constructor(private http: HttpClient,private hotelService: HotelService,) { }

  ngOnInit(): void {
    this.hotelService.getHoteles().subscribe(result => this.hoteles = result);
=======
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private http: HttpClient, private hotelService: HotelService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.hotelService.getHoteles().subscribe(result => this.hoteles = result);

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
>>>>>>> Stashed changes
  }



}
