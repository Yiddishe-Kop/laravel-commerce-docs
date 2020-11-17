---
title: Currencies
description: 'Supporting multiple currencies'
position: 7
category: Guide
version: 1.0
---

Laravel-commerce makes selling in multiple currencies is quite simple.

### Setting the price according to the currency
The `getPrice` method [which you implement on your `Purchasable` model] has a `$currency` parameter, so you are free to use any logic you want to return the correct price according to the currency.

```php
 public function getPrice($currency = null): int {
   if ($currency == 'USD') {
     return $this->price_usd;
   } else if ($currency == 'GBP') {
     return $this->price_gbp;
   }
}
```

### The default currency
You can set the default currency of you store in the `config`:

```php[config/commerce.php]
return [
  // default currency
  'currency' => 'USD',
  //...
];
```

### Changing the currency of the cart
You can change the currency of the cart like so:

```php
Cart::setCurrency('GBP');
```

This will automatically trigger a re`calculateTotals()` with the new currency.

<alert type="danger">

You can't change the currency after the order is marked as completed. If you do, we'll throw an `OrderAlreadyComplete` exception.

</alert>
