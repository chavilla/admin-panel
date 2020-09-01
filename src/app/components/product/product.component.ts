import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  public products:Product[];
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<Product>= new Subject();  

  constructor(private productServices:ProductService) { }

  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength:2,
      language: {
        url: 'cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json',
        emptyTable: "No hay datos",
      }
    }
    this.getAll();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getAll():void {
    this.productServices.getProducts().subscribe(
      (res:any)=>{
        this.products=res.products;
        this.dtTrigger.next();
      },
      error=>{

      }
    )
  }

}
