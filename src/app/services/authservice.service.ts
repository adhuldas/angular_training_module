import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router) { }

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
      this.setUsername(email);
      return of({ name: 'Adhul', email: 'adhul@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

}
