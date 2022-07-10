import type { NextApiRequest, NextApiResponse } from 'next'
import client from "client"


export default async function loginUser(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const data = await client.createIfNotExists(JSON.parse(req.body));
        res.status(200).json(data)
    } catch (e) {
        throw Error(JSON.stringify(e))
    }
}
