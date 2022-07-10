// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from "client"
import { IPost } from 'type';

export default async function getPins(
    req: NextApiRequest,
    res: NextApiResponse<IPost[]>
) {
    const query = '*[_type=="post"]';
    const data = await client.fetch(query)
    res.status(200).json(data)
}
