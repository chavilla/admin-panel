import { Auth } from './../models/auth';
import { Global } from './global';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private baseUrl=Global.url;

  constructor(private http:HttpClient) {}

  ngOnInit():void{
  }

  login(auth:Auth): Observable<any>{
    return this.http.post<any>( this.baseUrl+'/auth', auth);
  }

  loggedIn(){
   return !!localStorage.getItem('token');
  }

  getToken():string {
    return localStorage.getItem('token');
  }

  getLoggedIn(){
    return this.http.get<any>( this.baseUrl + '/auth');
  }

  logout():void{
    localStorage.removeItem('token');
   
  }

}
