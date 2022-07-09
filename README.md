### Instructions to run

- Create a postgres database
- Create a .env file with the following path, replacing dbname, user and password.

```
 DATABASE_URL="postgres://user:pass@localhost/dbname"
```

- Run `yarn` to install dependencies
- Run `yarn prisma migrate dev` to run migrations
- Run `yarn dev` to start the server
