import db from "@/lib/db";
import { setSesstion } from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");

    if (!code) {
        return notFound();
    }

    const searchParams = new URLSearchParams({
        client_id: process.env.GITHUB_OAUTH_CLIENT_ID!,
        client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET!,
        code,
    }).toString();

    const { error, access_token } = await (
        await fetch(
            `https://github.com/login/oauth/access_token?${searchParams}`,
            {
                method: "POST",
                headers: { Accept: "application/json" },
            },
        )
    ).json();

    if (error) {
        return notFound();
    }

    const { id, login, avatar_url } = await (
        await fetch(`https://api.github.com/user`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        })
    ).json();

    const user = await db.user.findUnique({
        where: {
            github_id: id,
        },
        select: {
            id: true,
        },
    });

    if (user) {
        await setSesstion(user.id);
        return redirect("/");
    }

    const newUser = await db.user.create({
        data: {
            username: login,
            avatar_url,
            github_id: id,
        },
        select: {
            id: true,
        },
    });

    await setSesstion(newUser.id);
    return redirect("/");
}
