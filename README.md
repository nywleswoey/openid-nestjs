This is a simple application to test out OpenID authentication with a NestJS application.
This application leverages on [@nestjs/passport](https://github.com/nestjs/passport) and [passport-google-oauth20](https://github.com/jaredhanson/passport-google-oauth2).

## Getting Started

Refer to the [Google Provider documentation](https://next-auth.js.org/providers/google) for the setup required in Google console.

Fill in the required values in .env, then run the development server:

```bash
pnpm run start:dev
```

The route `http://localhost:3000/auth` will require authentication via Google and return an access token.

This access token can be used with the `Authorization` header (Authorization: Bearer [access token]) to gain access to the `http://localhost:3000` route.
