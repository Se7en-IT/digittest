import users from '@/data/users.json'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'

export default function handler(req, res) {
  if (users[req.body.username] && users[req.body.username] === req.body.password) {
    const token = jwt.sign({
      username: req.body.username
    }, process.env.JWTSECRET)
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true
    }))
    res.status(200).end()
  } else {
    res.status(401).end()
  }

}
