import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  
  constructor(private router:Router,private customerSerive: CustomerService) { 

  }

  ngOnInit() {
  }
  submit(form) {
  
    this.customerSerive.customer.adress= form.value.sAddress;
    this.customerSerive.customer.adress=form.value.bAddress;
    this.customerSerive.postCustomer(this.customerSerive.customer);
    this.router.navigate(['/paymentComponent'])
    
  }
}

