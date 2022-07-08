import { initUrqlClient } from "next-urql";
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from "urql";

export const ssrCache = ssrExchange({ isClient: false });
const GraphCMSCLient = initUrqlClient(
  {
    url: process.env.NEXT_PUBLIC_GRAPHCMS_SCHEMA_URL,
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  },
  false
);

export default GraphCMSCLient;
