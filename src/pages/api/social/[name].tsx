import type { NextApiRequest, NextApiResponse } from "next";
import { GetSocialMediaByNameDocument } from "../../../graphql/generated/graphql";
import createGraphCMSClient from "../../../lib/urql";

const socialMediaRedirector = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name } = req.query;
  const client = createGraphCMSClient();

  const { data } = await client
    .query(GetSocialMediaByNameDocument, {
      name,
    })
    .toPromise();
  const url = data.socials[0]?.socialMediaUrl;

  if (!url) {
    return res.status(404).redirect("/");
  }

  res.status(301).redirect(url);
};

export default socialMediaRedirector;
