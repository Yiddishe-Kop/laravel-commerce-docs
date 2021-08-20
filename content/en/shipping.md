---
title: Shipping
description: 'Shippng cost'
position: 7.5
category: Guide
version: 1.0
---

## Overview

You can set the shipping cost in 2 ways: a simple flat shipping charge, or write your own advanced shipping calculator.

# Simple Flat Charge

Simply set the amount in the config like so:

```php
// default shipping amount
'shipping' => [
    'calculator' => null,
    'cost' => 12,
],
```

Remember to set `'calculator'` to `null`.

# Advanced Shipping Calculator

If you need more control on how to set the shipping cost, you can write your own `ShippingCalculator` class!

Just set the class in the config like so:

```php
'shipping' => [
    'calculator' => ExampleShippingCalculator::class,
],
```

This class only needs to implement 1 method:

```php

class ExampleShippingCalculator
{
    public static function calculate(Order $order)
    {
        $charge = 24 // perform your logic
        return $charge * 100;
    }
}

```

This method will be passed the `Order` as a parameter. You should return the charge in cents.


See the included [`ExampleShippingCalculator`](https://github.com/Yiddishe-Kop/laravel-commerce/blob/master/src/Helpers/ExampleShippingCalculator.php) for inspiration.
