package com.kxmil.ecommerce.dto;

import com.kxmil.ecommerce.entity.Address;
import com.kxmil.ecommerce.entity.Customer;
import com.kxmil.ecommerce.entity.Order;
import com.kxmil.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
