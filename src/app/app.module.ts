import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelesComponent } from './dashboard/hoteles/hoteles.component';
import { DataTablesModule } from 'angular-datatables';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { CreateHotelComponent } from './dashboard/create-hotel/create-hotel.component';
import { CreateClienteComponent } from './dashboard/create-cliente/create-cliente.component';
import { ClientesComponent } from './dashboard/clientes/clientes.component';
import { ReservarComponent } from './reservar/reservar.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { CreateReservaComponent } from './dashboard/create-reserva/create-reserva.component';
import { ReservasComponent } from './dashboard/reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    HotelesComponent,
    CreateHotelComponent,
    CreateClienteComponent,
    ClientesComponent,
    ReservarComponent,
    HomeDashboardComponent,
    CreateReservaComponent,
    ReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
