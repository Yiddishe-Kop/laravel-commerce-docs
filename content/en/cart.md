---
title: Cart
description: 'Using the shopping cart'
position: 3
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Features



Add `@nuxtjs/xxx` dependency to your project:

<list :items="['guest cart', 'attach cart to user at login']"></list>

This is so nice! <badge>a badge</badge>

<alert>an alert</alert>

<alert type="success">an alert</alert>

<alert type="warning">an alert</alert>

<alert type="danger">an alert</alert>

<alert type="danger">You need to go to sleep!</alert>

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxtjs/xxx
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxtjs/xxx
  ```

  </code-block>
  <code-block label="PHP">

  ```php
  composer require yiddishe-kop/laravel-commerce
  ```

  </code-block>
</code-group>

Then, add `@nuxtjs/xxx` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    '@nuxtjs/xxx'
  ],
  xxx: {
    // Options
  }
}
```
