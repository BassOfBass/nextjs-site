import {NextApiRequest, NextApiResponse} from "next"

/**
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default function postRegister(req, res) {
  res.status(200).send("TBD")
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
