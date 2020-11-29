---
title: Coupons
description: 'Creating coupons'
position: 7
category: Guide
version: 1.0
---

## Overview

You can create coupons, which can be applied to the cart.

Use the `Coupon` model to create coupons, like so:

```php
use YiddisheKop\LaravelCommerce\Models\Coupon;

$coupon = Coupon::create([
    'name' => 'Special Coupon',
    'code' => 'BLACK-FRIDAY-1935',
    'type' => Coupon::TYPE_PERCENTAGE,
    'discount' => 20,
    'max_uses' => 20,
    'times_used' => 0,
    'valid_from' => now(),
    'valid_to' => now()->addMonth(),
]);
```

### Coupon Attributes and Default values

| Attribute | Default value | Description |
| --- | --- | --- |
| `name` | `"Coupon"` | The name of the coupon |
| `code` | | The coupon code (unique) |
| `type` | `"percentage"` | Type of coupon, can be `'percentage'` or `'fixed'` |
| `discount` | `10` | The discount amount (percentage or fixed amount) |
| `max_uses` | `null` | The maximum times the coupon can be used |
| `times_used` | `0` | How many times the coupon has been used already |
| `valid_from` | `null` | Timestamp when coupon is valid from |
| `valid_to` | `null` | Timestamp when coupon expires |


<alert type="info">

When setting the Coupon type, use the available constants:

```php
$coupon = Coupon::create([
    'type' => Coupon::TYPE_FIXED,
    // or
    'type' => Coupon::TYPE_PERCENTAGE,
]);
```

</alert>

## Applying Coupons
To apply a coupon to the Cart:

```php
Cart::applyCoupon($couponCode);
```

This will throw an exception if the coupon is not valid.
You can type-hint the exception to handle each specific exception:

```php
try {
  Cart::applyCoupon($couponCode);
} catch (CouponNotFound $e) {
  // coupon code invalid
} catch (CouponExpired $e) {
  // coupon has expired
}  catch (CouponLimitReached $e) {
  // coupon has been used to it's limit
}
```

### Removing a coupon

You guessed it:

```php
Cart::removeCoupon();
```

### How Coupon Discount is Applied

The Coupon is saved to the Order's `coupon_id` column.

When calling `Cart::calculateTotals()` the discount will be calculated & applied automatically to the Order.

Take a look at the default config:

```php
  // Coupon settings
  'coupon' => [
    'include_tax' => true, // if to apply the coupon after taxes
    'include_shipping' => true, // if to apply the coupon after shipping
  ],
```

By default, the Coupon is applied after tax & shipping. If you want the Coupon to only apply to the `items_total`, you can modify the config to your liking.

<alert type="info">

This only makes a difference for `percentage` coupons, as `fixed` coupons are always the same fixed discount.

</alert>

The Order has a `coupon_total` column, where the calculated discount amount will be stored.

So for example if you have an Order with a total of `1000`, and you apply a `percentage` Coupon of `20`%, your final Order will look like this:

```php
[
  "items_total" => 1000
  "tax_total" => 200
  "shipping_total" => 12,
  "coupon_total" => 242.4 // default - coupon is applied to everything
  "grand_total" => 969.6 // after coupon discount
]
```
