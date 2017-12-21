import {ProductService} from './product.service';
import{AuthService} from './auth.service';
import{AuthGuard } from'./canAguard'
import { CustomerService } from './customer.service';
export const SERVICES =  [
    ProductService,
    AuthService,
    AuthGuard ,
    CustomerService
]