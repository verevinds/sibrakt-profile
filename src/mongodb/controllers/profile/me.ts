import { NextApiRequest } from "next";

export default (req: NextApiRequest) => ({
  //@ts-ignore
  id: req.user.id,
  //@ts-ignore
  role: req.user.role,
  //@ts-ignore
  email: req.user.email,
  //@ts-ignore
  score: req.user.score,
});
