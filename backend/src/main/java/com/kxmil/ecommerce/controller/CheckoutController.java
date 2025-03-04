package com.kxmil.ecommerce.controller;

import com.kxmil.ecommerce.dto.Purchase;
import com.kxmil.ecommerce.dto.PurchaseResponse;
import com.kxmil.ecommerce.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        return checkoutService.placeOrder(purchase);
    }

}
