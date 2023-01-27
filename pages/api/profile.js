import jwt from 'jsonwebtoken'

export default function handler(req, res) {
  try {
    res.status(200).json(jwt.verify(req.cookies.token, process.env.JWTSECRET))
  } catch (err) {
    res.status(401).end()
  }
}
