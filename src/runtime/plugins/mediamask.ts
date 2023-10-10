import {Configuration, MediamaskApi} from "mediamask-js";
import { useRuntimeConfig, useServerSeoMeta } from '#imports'

export interface SignedUrlParameters {
  [name: string]: string
}

export class Mediamask {
  insertOgImage(signedUrl) {
    useServerSeoMeta({
      ogImage: signedUrl,
      twitterCard: 'summary_large_image',
    })
  }

  createSignedUrl(templateId: string, options: SignedUrlParameters): string {
    const api = this.getApiInstance();
    return api.createSignedUrl(templateId, options);
  }

  private getApiInstance() {
    const {mediamask} = useRuntimeConfig()
    if (mediamask.apiKey === null || mediamask.apiKey === '') {
      throw Error('Mediamask API Key is not configured. Please make sure you have the mediamask.apiKey set inside your nuxt.config.ts')
    }
    return new MediamaskApi(
      new Configuration({
        accessToken: mediamask.apiKey,
      })
    );
  }
}
