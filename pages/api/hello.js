// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDb from '../../backend/db/connectDb'
initDb()
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
