---
title: Orders
description: 'Using the shopping cart'
position: 5
category: Guide
version: 1.0
---

## Overview
Here is a brief overview how carts and orders work:

When you add an item to the cart, a new `Order` is created, with the status of **"cart"**.
In other words: a cart is just an order with a status of "cart".

When you mark the order as complete, the status is changed to **"completed"**.

The good thing is that you don't need to worry about all this. To get an instance of the cart, just use:

```php
$cart = Cart::get();
```

This will give you the existing cart, or create a fresh one if needed.

Then to mark the order as completed:
```php
$completedOrder = Cart::markAsCompleted();
```
<alert type="warning">

You probably won't use this method directly, rather let a `PaymentGateway` do it for you.

</alert>

## Order Status

By default there are 2 order statuses:

<list :items="['Cart', 'Complete']" type="info" icon="IconChevronRight"></list>


## Retrieving Orders
In order to retrieve the completed orders, you should use this where clause:

```php
$orders = Order::where('status', Order::STATUS_COMPLETED)->get();

// or this query scope 😎
$orders = Order::completed()->get();
```

### `HasOrders` trait

We also provide a `HasOrders` trait which you can use with the User model, to get a `orders` relationship:

<code-group>
  <code-block label="User.php" active>

  ```php

  use YiddisheKop\LaravelCommerce\Traits\HasOrders;

  class User {
    use HasOrders;
    // ...
  }
  ```

  </code-block>
  <code-block label="OrdersController.php">

  ```php
  public function index(Request $request) {
    // you can now get all the users' completed orders
    $orders = $request->user()->orders;
    //...
  }
  ```

  </code-block>
</code-group>

This will retrieve only the completed orders.
