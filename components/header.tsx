import SignOutButton from "@/components/sign-out-button"
import { Button } from "@/components/ui/button"
import { getAuthSession } from "@/lib/auth"
import Link from "next/link"

export default async function Header() {
    const session = await getAuthSession()

    return (
        <div className="flex items-center justify-center gap-10 p-5">
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
        </div>
    )
}
