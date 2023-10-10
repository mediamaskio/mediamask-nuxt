import {defineNuxtModule, addPlugin, createResolver, addImports} from '@nuxt/kit'
import {defu} from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * The Mediamask API Key used to connect to the templates and generate images
   */
  apiKey?: string

  /**
   * Template ID of the mediamask template that should be used if no other template is configured
   */
  defaultTemplateId?: string

  /**
   * Configuration Object for the attributes used in the default template
   */
  defaultTemplateConfig?: any
}
import { name, version } from '../package.json'
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mediamask',
    compatibility: {
      nuxt: '^3',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    apiKey: ''
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.mediamask = defu(
      nuxt.options.runtimeConfig.mediamask,
      options,
    )

    addImports(
      ['useMediamaskOgImage'].map((name) => ({
        name,
        as: name,
        from: resolver.resolve(`runtime/composables/${name}`),
      })),
    )

    addPlugin({
      src: resolver.resolve('./runtime/plugins/mediamask.server'),
      mode: 'server'
    })
  }
})
