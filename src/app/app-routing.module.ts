import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelesComponent } from './dashboard/hoteles/hoteles.component';
import { CreateHotelComponent } from './dashboard/create-hotel/create-hotel.component';
import { CreateClienteComponent } from './dashboard/create-cliente/create-cliente.component';
import { ClientesComponent } from './dashboard/clientes/clientes.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { ReservasComponent } from './dashboard/reservas/reservas.component';
import { CreateReservaComponent } from './dashboard/create-reserva/create-reserva.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "home", component: HomeComponent },
  {
    path: "admin", component: DashboardComponent,
    children: [
      { path: "hoteles", component: HotelesComponent },
      { path: "hoteles/add", component: CreateHotelComponent },
      { path: "hoteles/update/:id", component: CreateHotelComponent },
      { path: "clientes", component: ClientesComponent },
      { path: "clientes/add", component: CreateClienteComponent },
      { path: "clientes/update/:id", component: CreateClienteComponent },
      { path: "home", component: HomeDashboardComponent },
      { path: "reservas", component: ReservasComponent },
      { path: "reservas/add", component: CreateReservaComponent },
      { path: "reservas/update/:id", component: CreateReservaComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
