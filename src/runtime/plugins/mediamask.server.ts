import {defineNuxtPlugin} from '#imports'
import {Mediamask} from "./mediamask";

export default defineNuxtPlugin(async () => {
  return {
    provide: {
      mediamask: new Mediamask(),
    },
  }
})
