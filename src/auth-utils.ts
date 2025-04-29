import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 11;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

// export const checkPassword = (
//   password: string,
//   passwordHash: string
// ) => bcrypt.compare(password, passwordHash);

export const createUnsecuredUserInformation = (user: User) => ({
  email: user.email,
});

export const createTokenForUser = (user: User) => {
  return jwt.sign(
    createUnsecuredUserInformation(user),
    "super-secret"
  );
};
