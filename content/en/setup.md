---
title: Installation
description: ''
position: 2
category: Setup
---

You can install the package via composer:

```bash
composer require yiddishe-kop/laravel-commerce
```

## Config

To publish the commerce.php config file:

```bash
php artisan vendor:publish --provider="YiddisheKop\LaravelCommerce\CommerceServiceProvider" --tag="config"
```

## Migrations

You can also publish the migrations if you need to customize them:
```bash
php artisan vendor:publish --provider="YiddisheKop\LaravelCommerce\CommerceServiceProvider" --tag="migrations"
```
