// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from "client"

interface ICategories {
    emoji: string
    title: string
}

export default async function getCategories(
    req: NextApiRequest,
    res: NextApiResponse<ICategories[]>
) {
    const query = '*[_type=="category"]';
    const data = await client.fetch(query)
    res.status(200).json(data)
}
