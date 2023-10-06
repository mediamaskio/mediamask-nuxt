# Mediamask Nuxt

>  Integrate Open Graph Images in your [Nuxt](https://nuxt.com/) Application with the official [mediamask](https://mediamask.io/) plugin.

## Features

- Add beautiful Open Graph Images to your nuxt Application quick & easy
- Use handcrafted designs from the mediamask template library
- Build custom designs that fit your brand with the **mediamask studio** template editor

## Quick Setup

1. Add `mediamask-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D mediamask-nuxt

# Using yarn
yarn add --dev mediamask-nuxt

# Using npm
npm install --save-dev mediamask-nuxt
```

2. Add `mediamask-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'mediamask-nuxt'
  ]
})
```

3. Register at [mediamask.io](https://mediamask.io/) and retrieve an API token [here](https://mediamask.io/team/api-tokens). 
4. Put the API Key in your `.env` file like this `NUXT_PUBLIC_MEDIAMASK_API_KEY={API_KEY}`
5. You can either create a new template or use one of the templates provided in the mediamask template library. 
   Learn more about creating templates in mediamask in the [mediamask docs](https://docs.mediamask.io/)
6. After creating the template you can define which template should be used via the `useMediamaskOgImage()` composable inside of you pages or layouts. 
   Copy the template ID and fill the dynamic layers by providing a config object with API Names and values. 

```js
// app.vue

<script setup lang="ts">
useMediamaskOgImage('bf01225b-941e-4b7b-a397-f5fba4867ddb', {
    title: 'Great website title',
    bannerImage: 'https://picsum.photos/200/300'
})
</script>
```

**Example with Nuxt Content**
```js
// pages/knowledge-base/[slug].vue

<script setup lang="ts">
const { data: page } = await useAsyncData('knowledge-base', queryContent('/knowledge-base/' + useRoute().params.slug).findOne)
  
useMediamaskOgImage('bf01225b-941e-4b7b-a397-f5fba4867ddb', {
  title: page.value.title,
  description: page.value.description,
  pageImage: 'https://picsum.photos/200/300'
})

</script>

```
That's it! You can now use Mediamask in your Nuxt app ✨

## Known issues

* Currently the Nuxt Dev Tools do not display the images in the Open Graph Tab

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
  
