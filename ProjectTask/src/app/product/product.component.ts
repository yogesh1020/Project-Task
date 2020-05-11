import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  rootURL: string = 'https://localhost:44310/api';
  result:any
  search:any
  isDesc: boolean = false;
  column: string = 'productName';
  records: any;

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {

    this.http.get(this.rootURL+'/Products').subscribe((res:any)=>{
      this.result = res
    })

  }
 

}
