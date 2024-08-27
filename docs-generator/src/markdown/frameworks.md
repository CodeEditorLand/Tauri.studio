# In no particular order
This page seeks to help you integrate your front-end framework of choice with Tauri. If you find that a framework is missing or something needs to be updated, by all means please make a PR to this page!

## Svelte

## Gatsby

## Vue-CLI

## Quasar
Add this to your `quasar.conf.js`
```
chainWebpack (chain) {
  require('@tauri-apps/tauri-webpack').chain(chain, {
    tauriLazyLoading: !ctx.dev
  })
}
```

## Angular

## React
