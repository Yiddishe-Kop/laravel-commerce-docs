---
title: Orders
description: 'Using the shopping cart'
position: 5
category: Guide
---

## Orders
You can use the `HasOrders` trait on the User model, to get a `orders` relationship:
```php

use YiddisheKop\LaravelCommerce\Traits\HasOrders;

class User {
  use HasOrders;
  // ...
}

// you can now get all the users' orders (status complete)
$orders = $user->orders;
```
