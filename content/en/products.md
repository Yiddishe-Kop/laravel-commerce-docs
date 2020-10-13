---
title: Products
description: ''
position: 3
category: Guide
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
    public function getPrice(): int {
        return $this->price;
    }
}
```
