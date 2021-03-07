import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: number
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ status: 200 })
}
