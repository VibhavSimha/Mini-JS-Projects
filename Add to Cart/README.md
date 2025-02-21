# Add To Cart Project

A simple web-based shopping cart application built with HTML, CSS, and JavaScript. This project demonstrates how to display products, add items to a cart, update totals dynamically, and persist cart data using localStorage.

## Overview

The Add To Cart project is designed as a lightweight demo for understanding basic e-commerce interactions. Users can view a list of products, add items to their cart, see the updated cart total, and perform a checkout which resets the cart.

## Features

- **Dynamic Product List:** Displays a list of products with prices.
- **Add to Cart Functionality:** Click on an "Add To Cart" button to increase the quantity of a selected product.
- **Cart Updates:** The cart automatically updates to show current items, their quantities, and the total cost.
- **Checkout Process:** A checkout button alerts the total amount and clears the cart.
- **Local Storage Integration:** Cart data is stored in the browser so that it persists even when the page is reloaded.
 
## Customization

# Updating Products:
    To change the product list or prices, modify the cartItems array in script.js:

let cartItems = JSON.parse(localStorage.getItem('cart')) || [
    { id: 1, name: "Product 1", qty: 0, price: 25.5 },
    { id: 2, name: "Product 2", qty: 0, price: 30 },
    { id: 3, name: "Product 3", qty: 0, price: 20.5 }
];