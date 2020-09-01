import { User } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public authorized: User;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.setAuthorized();
  }

  setAuthorized(): void{

    this.authService.getLoggedIn().subscribe(
      res=>{
        this.authorized=res.user.name;    
      },
      error=>{
        console.log(error);
      }
    )
  }

}
