import { GraphQLClient } from "graphql-request";

const GraphCMSClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_SCHEMA_URL);
const HashnodeClient = new GraphQLClient(process.env.NEXT_PUBLIC_HASHNODE_SCHEMA_URL);

export const initGraphClient = (locale: string = 'enUS') => {
  const client = GraphCMSClient;
  client.setHeader("gcms-locales", locale);

  return client;
}

export const initHashClient = () => {
  const client = HashnodeClient;
  return client;
}
