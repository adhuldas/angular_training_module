import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AdminModule } from './modules/admin/admin.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgotComponent } from './components/forgot/forgot.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/login"},
  {path:"login",component:LoginComponent},
  {path:"forgot-password" , component:ForgotComponent },
  {path:"admin",canActivate:[authGuard],
  loadChildren:() =>
  import("./modules/admin/admin.module").then((m)=>AdminModule)
},
{path:"**" , component:NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
