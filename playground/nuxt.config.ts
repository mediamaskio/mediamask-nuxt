export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: 'build',
    shim: false,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  }
})
