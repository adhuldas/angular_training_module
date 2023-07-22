import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  faLock = faLock;
  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  backToLogin(): void{
    this.router.navigate(['/login']);
  }
}
