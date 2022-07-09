import { initUrqlClient } from "next-urql";
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, Client } from "urql";

export const ssrCache = ssrExchange({ isClient: false });

export const createGraphCMSClient = (locale: string = "en_US"): Client => {
  return initUrqlClient(
    {
      url: process.env.NEXT_PUBLIC_GRAPHCMS_SCHEMA_URL,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      fetchOptions: () => {
        return {
          headers: {
            "gcms-locales": locale,
          },
        };
      }
    },
    false
  );
}

export const createHashnodeClient = (): Client => {
  return initUrqlClient(
    {
      url: process.env.NEXT_PUBLIC_HASHNODE_SCHEMA_URL,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );
}
