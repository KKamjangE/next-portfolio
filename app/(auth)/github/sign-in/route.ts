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

    // TODO: user 정보 DB에 저장 후 로그인
    // TODO: 이미 있는 유저면 로그인

    return redirect("/");
}
