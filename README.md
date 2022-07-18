# Delivery Service

This project was developed as practice. It simulates a delivery service where clients can post deliveries
and deliverymen can choose available deliveries and deliver them.

### Technologies

- Prisma
- Node.js
- TypeScript
- Express

### Instructions to run

- Create a postgres database
- Create a .env file with the following path, replacing dbname, user and password.

**_ You can find an Insomnia file at the root with all available routes _**

```
 DATABASE_URL="postgres://user:pass@localhost/dbname"
```

- Run `yarn` to install dependencies
- Run `yarn prisma migrate dev` to run migrations
- Run `yarn dev` to start the server
