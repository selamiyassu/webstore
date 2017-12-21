import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  FormGroup,  FormControl,  Validators,  FormBuilder,  FormArray } from "@angular/forms";

import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent implements OnInit {
  c : Customer = new Customer();
  customerInformationForm: FormGroup;

  constructor(private router:Router, 
    private customerSerive: CustomerService, 
    private formBuilder: FormBuilder) { 

      this.customerInformationForm = formBuilder.group({
        'fName': ['', [Validators.required]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'phone': ['', [Validators.required]],
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]],
      //'post': ['', Validators.maxLength(10)],
      });

    }

  ngOnInit() {
  }

  onSubmit(){
          
  this.c.fName = this.customerInformationForm.value.fName;
  this.c.email=this.customerInformationForm.value.email;
  this.c.phone=this.customerInformationForm.value.phone;
  this.c.username=this.customerInformationForm.value.username;
  this.c.password=this.customerInformationForm.value.password;
  /*
  this.c.fName = "abe";
  this.c.email= "gobe@gmail.com";
  this.c.phone= "123456789";
  this.c.username= "abuchu";
  this.c.password= "123456789";*/

  this.customerSerive.postCustomer(this.c);
  /*this.customerSerive.hello().subscribe(
    p => {
    console.log(p);
    });*/
  console.log("habennnnn");
  this.router.navigate(['/']);
}
}
