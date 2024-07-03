import SignOutButton from "@/components/sign-out-button"
import ThemeButton from "@/components/theme-button"
import { Button } from "@/components/ui/button"
import { getAuthSession } from "@/lib/auth"
import Link from "next/link"

export default async function Header() {
    const session = await getAuthSession()

    return (
        <div className="sticky top-0 z-50 flex w-full items-center justify-center gap-10 border-b border-neutral-500 p-3 backdrop-blur">
            <Link href={"/"}>
                <Button variant={"link"}>Home</Button>
            </Link>
            <Link href={"/feedback"}>
                <Button variant={"link"}>Feedback</Button>
            </Link>
            {session?.user.id ? (
                <SignOutButton />
            ) : (
                <Link href={"/sign"}>
                    <Button variant={"link"}>SignIn</Button>
                </Link>
            )}
            <ThemeButton />
        </div>
    )
}
