import NextAuth, { DefaultSession } from "next-auth";

type UserId = string;

declare module "next-auth" {
    interface Session {
        user: {
            id: UserId;
        } & DefaultSession["user"];
    }
}
