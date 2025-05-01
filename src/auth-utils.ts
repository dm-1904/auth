import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

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

const jwtInfoSchema = z.object({
  email: z.string().email(),
  iat: z.number(),
});

export const getDataFromAuthToken = (token?: string) => {
  if (!token) return null;
  try {
    return jwtInfoSchema.parse(jwt.verify(token, "super-secret"));
  } catch (e) {
    console.error(e);
    return null;
  }
};
