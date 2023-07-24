import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path:"", component:AdminDashboardComponent , children:[
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"services",component:ServiceComponent},
    {path:"weather",component:WeatherComponent},
  {path:"home",component:HomeComponent},
  { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
