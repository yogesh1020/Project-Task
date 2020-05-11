import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import {Subscription } from'rxjs'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


rootURL: string = 'https://localhost:44310/api';
  result: any;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.rootURL+'/Customers').subscribe((res:any)=>{
      this.result = res
    });
    
  }


}
