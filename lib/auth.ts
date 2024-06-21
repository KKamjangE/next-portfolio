import db from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, getServerSession } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_OAUTH_CLIENT_ID!,
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    adapter: PrismaAdapter(db),
    callbacks: {
        async redirect({ baseUrl }) {
            return Promise.resolve(baseUrl);
        },
    },
};

// 세션 정보 가져오기
export const getAuthSession = () => getServerSession(authOptions);
