import { Router } from '@angular/router';
import { Auth } from './../../models/auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public frame:FormGroup;
  public loginError:string;
  private auth:Auth;

  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.frame=this.fb.group({
      email:  [
        '',
        [Validators.email, Validators.required]
      ],
      password:[
        '',
        [ Validators.minLength(8),
          Validators.maxLength(15),
          Validators.required
        ]
      ]
    });
  }

  onSubmit(frame){
    this.auth=frame.value;
    this.authService.login(this.auth).subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        this.router.navigate(['/home']);
      },
      error=>{
        this.loginError=error.error.msg;
      }
    );
  }
  

}
