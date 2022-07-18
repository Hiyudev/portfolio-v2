import type { NextApiRequest, NextApiResponse } from "next";
import { GetAllProjectsDocument } from "../../../graphql/generated/graphcms";
import { initGraphClient } from "../../../lib/client";
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    })
  })
}

const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  await runMiddleware(req, res, cors);

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
    return res.status(500).send(err.message);
  }
};

export default revalidateHandler;
