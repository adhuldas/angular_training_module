import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router,private httpClient:HttpClient) { }

  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  setUsername(username:string):void{
    localStorage.setItem('username',username);
  }

  getUsername():string|null{
    return localStorage.getItem('username');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({email,password}:any):Observable<any> { 
    if(email === 'adhul' && password === 'adhul@123'){
      this.setToken('asdfghjkl123456789');
      this.setUsername("Adhul Das M K");
      return of({ name: 'Adhul', email: 'adhul@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  setWeatherDetails(response:any):void{
    localStorage.setItem('area',response.location.name);
    localStorage.setItem('region',response.location.region);
    localStorage.setItem('country',response.location.country);
    localStorage.setItem('current_temp',response.current.temp_c);
    localStorage.setItem('condition',response.current.condition.text);
    localStorage.setItem('wind',response.current.wind_kph);
    localStorage.setItem('presure',response.current.pressure_mb);
    localStorage.setItem('humidity',response.current.humidity);

  }

  getarea(): string | null{
    return localStorage.getItem('area');
  }

  getregion(): string | null{
    return localStorage.getItem('region');
  }
  getcountry(): string | null{
    return localStorage.getItem('country');
  }

  getcurrent_temp(): string | null{
    return localStorage.getItem('current_temp');
  }

  getcondition(): string | null{
    return localStorage.getItem('condition');
  }

  getwind(): string | null{
    return localStorage.getItem('wind');
  }

  getpresure(): string | null{
    return localStorage.getItem('presure');
  }

  gethumidity(): string | null{
    return localStorage.getItem('humidity');
  }
  weatherApi(): void {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json';
    const querystring = { q: '53.1,-0.13' };

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '010ee6c686msh31d6ce7fd9c0414p10eacdjsn2dfbdf0ac867',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });
    this.httpClient.get<any>(url, { headers, params: querystring }).subscribe(
      (response) => {
        console.log('Response:', response);
        this.setWeatherDetails(response)
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
