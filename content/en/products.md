---
title: Products
description: ''
position: 3
category: Guide
version: 0.0.2
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
    public function getPrice($currency = null): int {
        return $this->price;
    }
}
```
