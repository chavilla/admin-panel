import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.AuthService.getLoggedIn().subscribe(
    res=>{
      this.userNow=res.user.name;
    },error=>{
      this.router.navigate(['/login']);
    })
  }

}
