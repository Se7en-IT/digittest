import users from '@/data/users.json'

export default function handler(req, res) {
  if (users[req.body.username] && users[req.body.username] === req.body.password) {
    res.status(200).json({
      token: "ok"
    })
  } else {
    res.status(401).end()
  }

}
