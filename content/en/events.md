---
title: Events
description: 'Handle events in your store'
position: 9
category: Guide
version: 1.0
---

## Handling events in your store

You might want to send an order confirmation email when an order is marked as completed.

This package will fire off events at important stages in your store, that you can listen to:

Here is a list of events fired:

| Event | Description | Available Properties |
| --- | --- | --- |
| `OrderCompleted` | An order has been completed | `$order` - the Order |

### Listening to events

Just add your listener to `EventServiceProvider`'s `$listen` array:

```php
protected $listen = [
  // ...
  \YiddisheKop\LaravelCommerce\Events\OrderCompleted::class => [
      \App\Listeners\SendOrderConfirmationEmail::class,
      // ...
  ],
];
```

See the Laravel [events documentation](https://laravel.com/docs/8.x/events) for more on how to create listeners.
