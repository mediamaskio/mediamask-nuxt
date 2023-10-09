import {defineNuxtPlugin} from '#imports'
import {Mediamask} from "./mediamask";
import {NuxtApp} from "nuxt/app";

export default defineNuxtPlugin(async () => {
  return {
    provide: {
      mediamask: new Mediamask(),
    },
  }
})
