import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware() {
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ req }) => {
                return !Boolean(req.cookies.get("next-auth.session-token"))
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
        pages: {
            signIn: "/",
        },
    },
)

export const config = {
    matcher: ["/sign"],
}
