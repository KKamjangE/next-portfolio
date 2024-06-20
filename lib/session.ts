import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
    id?: number;
}

export async function getSession() {
    const session = await getIronSession<SessionContent>(cookies(), {
        cookieName: "user_token",
        password: process.env.COOKIE_PASSWORD!,
    });

    return session;
}

export async function setSesstion(id: number) {
    const session = await getSession();
    session.id = id;
    await session.save();
}
