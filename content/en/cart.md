---
title: Cart
description: 'Using the shopping cart'
position: 4
category: Guide
---

## Getting the Cart

You can access the cart anywhere, regardless if the user is logged in or a guest, using the facade:

``` php
use YiddisheKop\LaravelCommerce\Facades\Cart;

$cart = Cart::get();
```

When the guest logs in, the cart will be attached to his account 👌.

**Note**: If you want the cart to still be available after logout, you need to override the following method in `Auth\LoginController`:
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

### Add products to cart
Adding a product to the cart couldn't be simpler:
```php
Cart::add(Purchasable $product, int $quantity = 1);
```
Alternatively:
```php
$product->addToCart($quantity = 1);
```
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
Now the cart has the following data up to date:
```
[
  "items_total" => 3552
  "tax_total" => 710.0
  "coupon_total" => "0"
  "grand_total" => 4262.0
]
```
Deleted products will automatically get removed from the cart upon calculating the totals.
