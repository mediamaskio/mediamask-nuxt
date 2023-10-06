import {SignedUrlParameters} from "../plugins/mediamask";
import {useNuxtApp} from "#app";

export async function useMediamaskOgImage(templateId: string, options: SignedUrlParameters) {
  if (process.server) {
    const signedUrl = useNuxtApp().$mediamask.createSignedUrl(templateId, options);
    useNuxtApp().$mediamask.insertOgImage(signedUrl)
  }
}
