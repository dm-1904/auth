/**
 * In schema.prisma
 * add a field to User to encapsulate the password hash
 * passwordHash String
 *
 * run migration
 * in terminal - npx prisma migrate dev
 * - got an error
 * - added .env with DATABASE_URL="file:./dev.db"
 * - re ran migration - got error
 * - ran npx prisma migrate dev --create-only
 *
 * WOULD NOT DO THIS IN LIVE APP
 * - delete existing dev.db
 * - re ran npx prisma migrate dev --create-only
 * - deleted empty migration
 *
 * create encryption-playground.ts
 * npm i bcrypt
 * npm i @types/bcrypt
 *
 * the higher the saltRounds, the more the password is encrypted
 * but the longer it takes to run the code.
 *
 * Creating users in seed.ts
 * npx prisma migrate dev
 * seed file now has errors because missing password
 * DO NOT STORE PASSWORDS IN THE DATABASE
 * create file auth-utils.ts in src
 * -create fn to hash password
 * npm run seed
 *
 * npx prisma studio - hashed passwords now exist in database
 *
 * Create auth controller - auth.router.ts
 *
 * in postman
 * POST to http://localhost:3000/auth/login - Body raw JSON
 *  {
     "email": "jon@jon.com",
     "password": "aldfjalfjlk"
     };
        - "Invalid Credentials" message
 * correct password sends the message from auth-utils.ts
 */

// Auth 6 creating a JWT for the user

/**
 * npm install jsonwebtoken
 * npm i --save-dev @types/jsonwebtoken
 *
 * import jwt from "jsonwebtoken"
 *
 * take print out of console.log and paste it into https://jwt.io/#debugger-io
 * it will uncode it - the code has nothing to keep it secret
 *
 * in auth.router.ts
 * DO NOT PUT A PASSWORD IN JWT
 *
 * in postman the correct email and pass returns a token.
 */

// Auth 7: Using a JWT token on an endpoint
/**
 * In Postman paste the JWT token in the Authorization tab
 * select Bearer Token as the Type.
 * Posting to /dogs
 * Make sure the body matches the validateRequest() in the post method
 *
 * In auth-utils.ts
 * Write getDataFromAuthToken()
 * same error at 6:24
 * - his error was because mispelled "super-secret" in auth-utils.ts
 * - he gets undefined after fixing the error.
 * - adds return in try {} in getDataFromAuthToken() and his code works
 *    - my code still prints the same error.
 * SOLUTION - I had "" around my token. Delete them
 *
 * jwtInfoSchema()
 */
