import { Injectable } from '@angular/core';
import { PRODUCTS } from '../models/product-data';
import { Product } from '../models/Product';
import { Http, Headers } from '@angular/http';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

    constructor(private http: Http) {

    }

    getProducts() {
        console.log('hello am here');
        return this.http.get('http://localhost:3000/products/all');
        
    }

    getProduct(id) {
        return this.http.get('http://localhost:3000/products/id');
         
    }

}
