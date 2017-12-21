import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CustomerService } from '../../services/customer.service';
import {
  FormGroup,  FormControl,  Validators,  FormBuilder,  FormArray } from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private router:Router,
    private customerSerive: CustomerService,
    private formBuilder: FormBuilder) {

      this.paymentForm = formBuilder.group({
        'cardNumber': ['', [Validators.required]],
        'exprirationmonth': ['', [Validators.required]],
        'exprirationyear': ['', [Validators.required]],
        'securitycode': ['', [Validators.required]],
        'cardtype': ['', [Validators.required]],
      //'post': ['', Validators.maxLength(10)],
      });

    }

  ngOnInit() {
  }

  onSubmit(){
  this.customerSerive.customer.payment=this.paymentForm.value.exprirationmonth;
  this.customerSerive.customer.payment=this.paymentForm.value.exprirationyear;
  this.customerSerive.postCustomer(this.customerSerive.customer);
  
  this.router.navigate(['/confirmation']);
 }
}
