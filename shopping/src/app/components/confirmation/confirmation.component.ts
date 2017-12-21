import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartAction } from '../../store/actions/cart.actions';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  public cartSubscription: Subscription;

  public cart = [];

  constructor(private cartStore: CartAction) { }

  ngOnInit() {
    // this.cartSubscription = this.cartStore.getState().subscribe(res => {
    //   this.cart = []
    // })
    this.cartStore.emptyCart();
  }

  ngOnDestroy() {
   // this.cartSubscription.unsubscribe()
  }

}
