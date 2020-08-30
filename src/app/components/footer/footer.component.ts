import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year:number;

  constructor() { 

  }

  ngOnInit(): void {
    this.getYear();
  }

  getYear():void{
    let year=new Date();
    this.year=year.getFullYear();
  }

}
