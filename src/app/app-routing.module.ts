import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent}
=======
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'admin',component:AdminComponent
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
