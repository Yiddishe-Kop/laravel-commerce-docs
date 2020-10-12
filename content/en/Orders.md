---
title: Orders
description: 'Using the shopping cart'
position: 4
category: Guide
---

## Creating Orders

To create an order just import the `Facades\Order`

Lorem import Lorem importLorem importLorem importLorem importLorem import

### Marking an order as complete

You can use the `HasOrders` trait on the User model, to get a `orders` relationship:

<code-group>
  <code-block label="PHP" active>

  ```php
  use YiddisheKop\LaravelCommerce\Traits\HasOrders;

  class User {
    use HasOrders;
    // ...
  }

  // you can now get all the users' orders (status complete)
  $orders = $user->orders;
  ```

  </code-block>
</code-group>

Hello!!!
