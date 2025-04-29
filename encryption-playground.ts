// import bcrypt from "bcrypt";

// const password = "PassWord!";

// bcrypt.hash(password, 10).then((hash) => console.log({ hash }));

// bcrypt
//   .compare(
//     password,
//     "$2b$10$YYFUcPu8soJTTqrNdhigJ.wSMzCcFycLltm4EKYw3f3Kyx5CHX2qe"
//   )
//   .then((result) => console.log({ result: result }));

import jwt from "jsonwebtoken";

const data = {
  name: "Damon",
};

const myJwt = jwt.sign(data, "super-secret");

console.log({ myJwt });
