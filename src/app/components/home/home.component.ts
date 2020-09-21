import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productCount: number;

  constructor(private AuthService:AuthService, 
    private router:Router,
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.productService.getCountProducts().subscribe(
      res=>{
        this.productCount=res.count;
      },
      error=>{
        console.log('Hubo un error');
        
      }
    )
  }

}
