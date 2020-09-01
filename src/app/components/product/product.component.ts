import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products:Product[];

  constructor(private productServices:ProductService) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll():void {
    this.productServices.getProducts().subscribe(
      res=>{
        console.log(res);
        this.products=res.products;
      },
      error=>{

      }
    )
  }

}
