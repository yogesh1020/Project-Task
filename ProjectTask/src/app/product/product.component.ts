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

    this.http.get(this.rootURL+'/Product').subscribe((res:any)=>{
      this.result = res
    })

  }
  sort(property) {
    this.isDesc = !this.isDesc;     
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.records.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };

}
