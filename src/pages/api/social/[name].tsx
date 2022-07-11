import type { NextApiRequest, NextApiResponse } from "next";
import { GetSocialMediaByNameDocument } from "../../../graphql/generated/graphcms";
import { initGraphClient } from "../../../lib/client";

const socialMediaRedirector = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name } = req.query;
  const client = initGraphClient();

  const { socials } = await client.request(GetSocialMediaByNameDocument, {
    name,
  });

  const url = socials[0]?.socialMediaUrl;

  if (!url) {
    return res.status(404).redirect("/");
  }

  res.status(301).redirect(url);
};

export default socialMediaRedirector;
