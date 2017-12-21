import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Http, Headers } from '@angular/http';
import { Body } from '@angular/http/src/body';
@Injectable()
export class CustomerService {
 customer : Customer = new Customer();
    constructor(private http: Http) {

    }

    getCustomers() {
        console.log('hello am here');
        return this.http.get('http://localhost:3000/customers');
        
    }

    getCustomer(id) {
        return this.http.get('http://localhost:3000/customers/id');
        
    }

    hello() {
        return this.http.get('http://localhost:3000/customers/hello');
    }

     postCustomer(customer){
       console.log(customer);
       this.http.post('http://localhost:3000/customers/add' ,customer).subscribe(
        p => {
         
         console.log(p);
        });;  
      
    }

}
