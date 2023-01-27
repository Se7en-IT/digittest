
import cookie from 'cookie'
export default function handler(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('token', "deleted", {
    httpOnly: true,
    expires: new Date()
  }))
  res.status(200).end()
}
