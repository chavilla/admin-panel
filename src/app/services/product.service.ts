import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string;

  constructor(private _http:HttpClient) { 
    this.url=Global.url;
  }

  getProducts():Observable<any>{
    return this._http.get(this.url+'/products');
  }

  saveProduct(data: Product): Observable<any>{
    return this._http.post(this.url + '/products',data);
  }

  getCountProducts(): Observable<any>{
    return this._http.get(this.url+'/products/count');
  }

}
