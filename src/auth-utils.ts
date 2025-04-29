import bcrypt from "bcrypt";

const saltRounds = 11;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

// export const checkPassword = (
//   password: string,
//   passwordHash: string
// ) => bcrypt.compare(password, passwordHash);
