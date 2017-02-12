import ClientBuilder from './client-builder'

export const configs = {
  Promise: typeof Promise === 'function' ? Promise : null,
  /**
   * Gateway implementation, it defaults to "lib/gateway/xhr" for browsers and
   * "lib/gateway/http" for node
   */
  gateway: null,
  gatewayConfigs: {
    /**
     * Setting this option will fake PUT, PATCH and DELETE requests with a HTTP POST. It will
     * add "_method" and "X-HTTP-Method-Override" with the original requested method
     * @default false
     */
    emulateHTTP: false,

    XHR: {
      /**
       * Indicates whether or not cross-site Access-Control requests should be made using credentials
       * such as cookies, authorization headers or TLS client certificates.
       * Setting withCredentials has no effect on same-site requests
       * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
       * @default false
       */
      withCredentials: false,

      /**
       * @callback to add aditional configurations to the XMLHttpRequest object.
       * @param {XMLHttpRequest} xhr
       * @default null
       */
      configure: null
    }
  }
}

/**
 * @param {Object} manifest
 */
export default function forge(manifest) {
  return new ClientBuilder(manifest, () => configs.gateway).build()
}
