import type { NextApiRequest, NextApiResponse } from "next";
import { GetAllProjectsDocument } from "../../../graphql/generated/graphcms";
import { initGraphClient } from "../../../lib/client";


const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).send('Invalid token');
  }

  try {
    const GClient = initGraphClient();

    const { projects: ProjectsData } = await GClient.request(
      GetAllProjectsDocument
    );

    await res.revalidate('/');
    await res.revalidate('/projects');
    await res.revalidate('/blogs');

    ProjectsData.map(async (project) => {
      await res.revalidate(`/project/${project.slug}`);
    })

    return res.send("Revalidation was a success")
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
};

export default revalidateHandler;
