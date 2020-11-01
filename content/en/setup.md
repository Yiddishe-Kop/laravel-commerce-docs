---
title: Installation
description: ''
position: 2
category: Setup
version: 1.0
---

You can install the package via composer:

```bash
composer require yiddishe-kop/laravel-commerce
```

## Config

The package has the following default config:

```php[config/commerce.php]
return [

  // default currency
  'currency' => 'USD',

  // default tax rate
  'tax' => [
    'rate'               => 20,
    'included_in_prices' => false,
  ],

  // default shipping amount
  'shipping' => [
    'cost' => 12
  ],

  /*
  |--------------------------------------------------------------------------
  | Payment Gateways
  |--------------------------------------------------------------------------
  |
  | You can setup multiple payment gateways for your store.
  | Here's where you can configure the gateways in use.
  */
  'gateways' => [
    PayPal::class => [],
  ],

  'prefix' => 'commerce', // routes prefix
  'middleware' => ['web'], // you probably want to include 'web' here

];
```

To publish the config file run the following artisan command:

```bash
php artisan vendor:publish --provider="YiddisheKop\LaravelCommerce\CommerceServiceProvider" --tag="config"
```

## Migrations

You can also publish the migrations if you need to customize them:
```bash
php artisan vendor:publish --provider="YiddisheKop\LaravelCommerce\CommerceServiceProvider" --tag="migrations"
```
