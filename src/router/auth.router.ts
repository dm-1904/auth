import { Router } from "express";
import { prisma } from "../../prisma/db.setup";
import bcrypt from "bcrypt";
import "express-async-errors";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";
import { intParseableString as intParseableString } from "../zod/parseableString.schema";
import {
  createTokenForUser,
  createUnsecuredUserInformation,
} from "../auth-utils";

const authController = Router();

authController.post(
  "/auth/login",
  validateRequest({
    body: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
  }),
  async (
    { body: { email: bodyEmail, password: bodyPassword } },
    res
  ) => {
    const user = await prisma.user.findFirst({
      where: {
        email: bodyEmail,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      bodyPassword,
      user.passwordHash
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const userInformation = createUnsecuredUserInformation;
    const token = createTokenForUser(user);

    return res.status(200).json({ token, userInformation });
  }
);

export { authController };
