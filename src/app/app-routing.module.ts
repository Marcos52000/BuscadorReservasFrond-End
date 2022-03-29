import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelesComponent } from './dashboard/hoteles/hoteles.component';
import { CreateHotelComponent } from './dashboard/create-hotel/create-hotel.component';


const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:"home",component:HomeComponent},
<<<<<<< Updated upstream
  { path:"admin", component:DashboardComponent,
    children:[
      { path:"hoteles", component:HotelesComponent},
    ]
  },
=======
  { path:"admin", component:DashboardComponent},
  { path:"hoteles", component:HotelesComponent},
  { path:"hoteles/add", component:CreateHotelComponent},



>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
