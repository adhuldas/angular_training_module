import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username:any;
  constructor(private auth:AuthserviceService) { 
    this.username = this.auth.getUsername()
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

}
