import { Global } from './../../services/global';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { UploadService } from '../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public product:Product;
  public frame: FormGroup;
  public error:boolean;
  public message:string;
  public filesToUpload:File[];
  public url:any;

  constructor(private fb:FormBuilder, private productService:ProductService, private uploadService:UploadService) {
    this.url=Global.url;
  }

  ngOnInit(): void {
    this.frame=this.fb.group({
      name:  [
        '',
        [
          Validators.pattern(/^[ñÑA-Za-z _]*[ñA-Za-z][ñA-Za-z0-9 _]*$/),
          Validators.required
        ]
      ],
      price:[
        1,
        [ 
          Validators.pattern(/^(\d+)$|^(\d+\.{1}\d{2})$/)
        ]
      ],
      stock:[
      0,
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/)
        ]
      ],
      image:[
       ''
        ,
        [
          Validators.required
        ]
      ]
    });
  }

  saveProduct(_frame): void {
    
    const { image,name, price, stock }=_frame.value;
    this.product=new Product(name,price,stock,'');

    const productStored=this.productService.saveProduct(this.product).subscribe(
      res=>{
        const product=res.productStored.id;
        if(product){
          this.uploadService.makeFileRequest(this.url+`/products/image/${product}`,[],this.filesToUpload,'image').then((result:any)=>{
            console.log(result);          
          })
        }
        else{
          console.log('Hubo un error');
          
        }
      },
      error=>{
        console.log(error);
        
      }
    )

    
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
    
  }

}
