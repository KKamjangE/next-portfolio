import { redirect } from "next/navigation";

// get 요청
export async function GET() {
    const searchParams = new URLSearchParams({
        client_id: process.env.GITHUB_OAUTH_CLIENT_ID!,
        scope: "read:user,user:email",
        allow_signup: "true",
    }).toString();

    return redirect(`https://github.com/login/oauth/authorize?${searchParams}`);
}
