import {Injectable} from '@angular/core';
import {CartItem} from '../common/cart-item';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(theCartItem: CartItem) {
    // Find item in cart by ID
    let existingCartItem = this.cartItems.find(
      (cartItem) => cartItem.id === theCartItem.id
    );

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      // If item not found, add it to the cart
      this.cartItems.push({...theCartItem, quantity: 1});
    }

    this.computeCartTotals();
  }

  private computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    this.cartItems.forEach(cartItem => {
      totalPriceValue += cartItem.unitPrice * cartItem.quantity;
      totalQuantityValue += cartItem.quantity;
    });

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    console.log('total price: ' + totalPriceValue);
    console.log('total quantity: ' + totalQuantityValue);
  }
}
