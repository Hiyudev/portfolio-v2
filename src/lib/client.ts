import { GraphQLClient } from "graphql-request";

const GraphCMSClient = new GraphQLClient(process.env.GRAPHCMS_SCHEMA_URL);
const HashnodeClient = new GraphQLClient(process.env.HASHNODE_SCHEMA_URL);

export const initGraphClient = (locale: string = 'enUS') => {
  const client = GraphCMSClient;
  client.setHeader("gcms-locales", locale);

  return client;
}

export const initHashClient = () => {
  const client = HashnodeClient;
  return client;
}
