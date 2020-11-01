---
title: Products
description: ''
position: 3
category: Guide
version: 1.1
fullscreen: false
---

You can make any model purchasable - by implementing the `Purchasable` contract:
```php
use YiddisheKop\LaravelCommerce\Contracts\Purchasable;
use YiddisheKop\LaravelCommerce\Traits\Purchasable as PurchasableTrait;

class Product implements Purchasable {
  use PurchasableTrait;

    // the title of the product
    public function getTitle(): string {
        return $this->name;
    }

    // the price
    public function getPrice($currency = null, $options = null): int {
        return $this->price;
    }
}
```

### Product Options
If the product has been added to the cart with some options ([see here](/cart#product-options)), for instance:
```php
Cart::add($product, 1, ['size' => 'large']);
```
These options are passed as the second argument to the `getPrice()` method.
You should the return the correct price for the selected options.

Here is an example:

```php
 public function getPrice($currency = null, $options = null): int {
    $price = $this->price;

    if ($options) {
      $price += [
        'small' => 10,
        'medium' => 20,
        'large' => 30,
      ][$options['size']];
    }

    return $price;
  }
```
