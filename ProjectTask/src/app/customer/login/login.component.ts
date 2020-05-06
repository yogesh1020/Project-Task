import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginFormGroup : FormGroup;
  constructor(private formBuilder:FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit(){
    if(this.loginFormGroup.invalid)
    {
      alert("Fild reuired");
    }
    else
    {
      this.router.navigateByUrl('profile');
      sessionStorage.setItem('token',this.loginFormGroup.controls.email.value)
    }
  }

}
