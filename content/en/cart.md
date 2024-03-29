---
title: Cart
description: "Using the shopping cart"
position: 4
category: Guide
version: 1.1
---

## Getting the Cart

You can access the cart anywhere, regardless if the user is logged in or a guest, using the facade:

```php
use YiddisheKop\LaravelCommerce\Facades\Cart;

$cart = Cart::get();
```

Alternatively, you can use Laravel's dependency injection:

```php
use YiddisheKop\LaravelCommerce\Cart;

public function show(Request $request, Cart $cart) {
  //...
}
```

When the guest logs in, the cart will be attached to his account 👌.

<alert>
 If you want the cart to still be available after logout, you need to override the following method in `Auth\LoginController`:
 </alert>

```php
public function logout(Request $request) {
    $this->guard()->logout();

    // keep cart data for after logout
    $cartId = session()->get('cart');
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    session()->put('cart', $cartId);

    if ($response = $this->loggedOut($request)) {
        return $response;
    }

    return $request->wantsJson()
        ? new JsonResponse([], 204)
        : redirect('/');
}
```

<hr>

### Add products to the cart

Adding a product to the cart couldn't be simpler:

```php
Cart::add(Purchasable $product, int $quantity = 1, $options = null);
```

Alternatively:

```php
$product->addToCart($quantity = 1, $options = null);
```

### Product Options

Let's say your product comes in 3 sizes: small, medium & large; small costs $10, medium $20 & large $30. You can pass the selected option as an array to the `addToCart()` method:

```php
$product->addToCart(1, ['size' => 'large']);
```

Or with the `Cart::add()` method:

```php
Cart::add($product, 1, ['size' => 'large']);
```

You can add as many options as needed, they're stored as `json` to the database.

<alert type="info">

For more how prices are calculated for products with options, see [product options](/products#product-options).

</alert>

If you add a product that already exists in the cart, we'll automatically just update the quantity 😎 .

### Remove products from the cart

```php
Cart::remove(Purchasable $product);
```

Alternatively:

```php
$product->removeFromCart();
```

To empty the whole cart:

```php
Cart::empty();
```

### Access cart items

You can access the cart items using the `items` relation:

```php
$cartItems = $cart->items;
```

To access the Product model from the cartItem, use the `model` relation (morphable):

```php
$product = $cart->items[0]->model;
```

## Calculating Cart Totals

To calculate and persist the totals of the cart, use the `calculateTotals()` method:

```php
Cart::calculateTotals();
```

This will handle the [Special Offers](/offers) & [Coupons](/coupons) for you 👌.

Now the cart has the following data up to date:

```
[
  "items_total" => 3552
  "tax_total" => 710.0
  "shipping_total" => 12,
  "coupon_total" => "0"
  "grand_total" => 4262.0
]
```

By default this will also update the OrderItem prices to the related Products current price. If you do not want to do that (rather leave the price as is) you can pass `false` as a parameter:

```php
Cart::calculateTotals(false);
```

---

Deleted products will automatically get removed from the cart upon calculating the totals.
