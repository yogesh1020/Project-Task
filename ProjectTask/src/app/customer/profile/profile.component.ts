import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import {Subscription } from'rxjs'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
subscription:Subscription;
rootURL: string = 'https://localhost:44310/api';
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.subscription =  this.http.get(this.rootURL+'/Customers').subscribe();
    console.log(this.subscription);
    
  }


}
