---
title: Special Offers
description: 'Creating special offers'
position: 6
category: Guide
version: 1.0
---

## Overview

You can create special offers for products in your store, and they will be applied automatically when the cart totals are calculated.

Use the `Offer` model to create special offers, like so:

```php
use YiddisheKop\LaravelCommerce\Models\Offer;

$offer = Offer::create([
    'name' => 'Black Friday Special',
    'type' => Offer::TYPE_PERCENTAGE,
    'discount' => 20,
    'min' => 3,
    'product_type' => Product::class,
]);
```

### Offer Attributes and Default values

| Attribute | Default value | Description |
| --- | --- | --- |
| `name` | `"Special Offer"` | The name of the offer |
| `type` | `"percentage"` | Type of offer, can be `'percentage'` or `'fixed'` |
| `discount` | `10` | The discount amount (percentage or fixed amount) |
| `min` | `1` | Minimum amount of products to qualify for the offer |
| `product_type` | `null` | The Product type (className) this offer applies to |


<alert type="warning">

When setting the Offer type, use the available constants:

```php
$offer = Offer::create([
    'type' => Offer::TYPE_FIXED,
    // or
    'type' => Offer::TYPE_PERCENTAGE,
]);
```

</alert>
