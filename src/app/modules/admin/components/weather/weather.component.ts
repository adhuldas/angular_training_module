import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  area:any;
  region:any;
  country:any;
  current_temp:any;
  condition:any;
  wind:any;
  presure:any;
  humidity:any;

  constructor(private auth:AuthserviceService){}
  ngOnInit(): void {
    this.auth.weatherApi();
    this.area = this.auth.getarea();
    this.region = this.auth.getregion();
    this.country = this.auth.getcountry();
    this.current_temp = this.auth.getcurrent_temp();  
    this.condition = this.auth.getcondition();
    this.wind = this.auth.getwind();
    this.presure = this.auth.getpresure();
    this.humidity = this.auth.gethumidity();
  
  }

}
