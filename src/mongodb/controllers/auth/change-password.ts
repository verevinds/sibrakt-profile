import { NextApiRequest } from "next";
import bcrypt from "bcryptjs";
import User from "src/mongodb/models/user";

export default async (req: NextApiRequest) => {
  const isPasswordMatch = await bcrypt.compare(
    req.body.currentPassword,
    //@ts-ignore
    req.user.password
  );
  if (!isPasswordMatch) {
    throw { message: "Текущий пароль не совпадает" };
  }
  const password = await bcrypt.hash(req.body.newPassword, 8);
  const user = await User.findByIdAndUpdate(
    //@ts-ignore
    { _id: req.user.id },
    { password }
  );
  return {
    message: 'Пароль успешно изменён!'
  };
};
