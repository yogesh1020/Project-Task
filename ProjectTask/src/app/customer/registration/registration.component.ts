import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationFormGroup : FormGroup;
  constructor(private formBuilder:FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.registrationFormGroup = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      mobileNumber:['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required]
    })
  }
  check(){
    if(this.registrationFormGroup.controls.password.value == this.registrationFormGroup.controls.confirmPassword.value){

    }
    else{
      alert("Password Not Match");
      this.registrationFormGroup.controls.confirmPassword.reset();
    }
  }
  submit(){
    if(this.registrationFormGroup.invalid)
    {
      alert("validation required");
    }
   else{
    this.router.navigateByUrl('login');
    console.log(this.registrationFormGroup.value)
   }
  }

}
