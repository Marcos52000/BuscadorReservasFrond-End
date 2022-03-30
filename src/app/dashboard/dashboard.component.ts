import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username :any = null;
  constructor() { }

  ngOnInit(): void {
    this.username= window.sessionStorage.getItem("auth-email");
    console.log(this.username);
  }

  logOut(): void {
    window.sessionStorage.removeItem("auth-email");
    window.location.href="/home";
  }
}
