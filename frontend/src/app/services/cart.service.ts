import {Injectable} from '@angular/core';
import {CartItem} from '../common/cart-item';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

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

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    this.cartItems.forEach(cartItem => {
      totalPriceValue += cartItem.unitPrice * cartItem.quantity;
      totalQuantityValue += cartItem.quantity;
    });

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(tempCartItem: CartItem) {
    tempCartItem.quantity--;
    if (tempCartItem.quantity === 0) {
      this.remove(tempCartItem)
    } else {
      this.computeCartTotals();
    }
  }

  remove(tempCartItem: CartItem) {
    // get index of item in the array
    const itemIndex = this.cartItems.indexOf(tempCartItem);

    // if found, remove the item from the array
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}
