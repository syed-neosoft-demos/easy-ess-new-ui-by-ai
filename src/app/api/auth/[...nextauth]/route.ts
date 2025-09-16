// // app/api/auth/[...nextauth].js
//app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

if (!process.env.KEYCLOAK_CLIENT_ID) {
  throw new Error("KEYCLOAK_CLIENT_ID is not set");
}
if (!process.env.KEYCLOAK_CLIENT_SECRET) {
  throw new Error("KEYCLOAK_CLIENT_SECRET is not set");
}
if (!process.env.KEYCLOAK_ISSUER) {
  throw new Error("KEYCLOAK_ISSUER is not set");
}
if (!process.env.NEXTAUTH_URL) {
  throw new Error("NEXTAUTH_URL is not set");
}
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not set");
}

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!,
    }),
  ],
});

export { handler as GET, handler as POST };
