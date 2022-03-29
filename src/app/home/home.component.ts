import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from './hotel.service';
import { LoginService } from '../services/auth/login.service';

const baseUrl = 'https://buscadorreservas.herokuapp.com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  hoteles:any = null;
  username :any = null;

  constructor(private hotelService: HotelService,private router: Router) {}

  ngOnInit() {

    this.hotelService.getHoteles().subscribe(result => this.hoteles = result);
    this.username= window.sessionStorage.getItem("auth-email");
    console.log(this.username);
  }

  logOut(): void {
    window.sessionStorage.removeItem("auth-email");
    window.location.reload();
  }
}
