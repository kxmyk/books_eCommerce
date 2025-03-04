package com.kxmil.ecommerce.service;

import com.kxmil.ecommerce.dto.Purchase;
import com.kxmil.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
