---
title: Special Offers
description: "Creating special offers"
position: 6
category: Guide
version: 2.1
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
    'product_ids' => [1,2,3],
    'valid_from' => now(),
    'valid_to' => now()->addMonth(),
]);
```

### Offer Attributes and Default values

| Attribute      | Default value     | Description                                         |
| -------------- | ----------------- | --------------------------------------------------- |
| `name`         | `"Special Offer"` | The name of the offer                               |
| `type`         | `"percentage"`    | Type of offer, can be `'percentage'` or `'fixed'`   |
| `discount`     | `10`              | The discount amount (percentage or fixed amount)    |
| `min`          | `1`               | Minimum amount of products to qualify for the offer |
| `product_type` | `null`            | The Product type (className) this offer applies to  |
| `product_ids`  | `null`            | The Product ids (array) this offer is limited to    |
| `valid_from`   | `null`            | Timestamp when offer is valid from                  |
| `valid_to`     | `null`            | Timestamp when offer expires                        |

<alert type="info">

When setting the Offer type, use the available constants:

```php
$offer = Offer::create([
    'type' => Offer::TYPE_FIXED,
    // or
    'type' => Offer::TYPE_PERCENTAGE,
]);
```

</alert>

## Applying Offers

To get the available offer for an Order:

```php
$offer = Offer::getFor($order);
```

To check if an Offer is valid for an OrderItem:

```php
if ($offer->isValidFor($item)) {
  // ...
}
```

And lastly, to apply the Offer to the OrderItem:

```php
$offer->apply($item);
```

<alert type="info">

You probably won't have to use the above methods yourself, as they all get handled internally when calling `Cart::calculateTotals()`.

</alert>

## How the discounts are stored

After an Offer is applied to an OrderItem, the orderItem will have its `discount` set to the discount amount.

So for example - if the product price is 1000, and the Offer is a 10% discount, the OrderItems will look like this:

```php
[
  'price' => 1000,
  'discount' => 100,
]
```

Note, that the `Order->items_total` and `Order->grand_total` will have the discount included.

# Another way to handle offers

Sometimes you may need to discount one item based if it is bought together with another item, etc.

You can write more advanced offers logic with this method:

In the config pass your own `OfferCalculator` class like so:

```php
'offers' => [
    'calculator' => ExampleOffersCalculator::class,
],
```

That class needs to implement a static `calculate` method. This method is passed the `$order`, and you are free to implement any logic you want.

See the included [`ExampleOffersCalculator`](https://github.com/Yiddishe-Kop/laravel-commerce/blob/master/src/Helpers/ExampleOffersCalculator.php) for inspiration.
