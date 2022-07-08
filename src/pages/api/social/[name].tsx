import type { NextApiRequest, NextApiResponse } from "next";
import { GetSocialMediaByNameDocument } from "../../../graphql/generated/graphql";
import GraphCMSCLient from "../../../lib/urql";

const socialMediaRedirector = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name } = req.query;

  const { data } = await GraphCMSCLient.query(GetSocialMediaByNameDocument, {
    name,
  }).toPromise();
  const url = data.socials[0]?.socialMediaUrl;

  if (!url) {
    return res.status(404).redirect("/");
  }

  res.status(301).redirect(url);
};

export default socialMediaRedirector;
