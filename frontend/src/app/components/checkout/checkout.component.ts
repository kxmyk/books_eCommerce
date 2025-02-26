import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup = new FormGroup({});

  totalPrice: number = 10;
  totalQuantity: number = 10;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
      }),
      shippingAddress: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      billingAddress: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      creditCards: this.formBuilder.group({
        cardType: ['', Validators.required],
        nameOnCard: ['', Validators.required],
        cardNumber: ['', Validators.required],
        securityCode: ['', Validators.required],
        expirationMonth: ['', Validators.required],
        expirationYear: ['', Validators.required],
      }),
    })
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer')?.value);
  }

  copyShippingAddressToBillingAddress(event: Event) {
    if (event.target) {
      this.checkoutFormGroup.controls['billingAddress']
        .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
    } else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }
  }
}
