// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/lib/actions'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const result = await sendEmail(req.body)
      if (result.error) {
        return res.status(400).json({ error: result.error })
      }
      return res.status(200).json({ message: 'Message sent successfully!' })
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}
