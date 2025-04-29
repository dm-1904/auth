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
 */
