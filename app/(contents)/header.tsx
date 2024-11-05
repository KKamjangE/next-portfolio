import Link from "next/link"

import MainNav from "@/app/(contents)/main-nav"
import MainSideNav from "@/app/(contents)/main-side-nav"
import SignOutButton from "@/app/(contents)/sign-out-button"
import ThemeButton from "@/app/(contents)/theme-button"
import { Button } from "@/components/ui/button"

import { getAuthSession } from "@/lib/auth"

export default async function Header() {
    const session = await getAuthSession()

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-600 backdrop-blur">
            <div className="m-auto flex h-12 max-w-screen-lg items-center justify-between px-5 *:flex *:items-center">
                <div>
                    <MainSideNav />
                    <MainNav />
                </div>
                <div>
                    {session?.user.id ? (
                        <SignOutButton />
                    ) : (
                        <Link href={"/sign"}>
                            <Button variant={"link"}>SignIn</Button>
                        </Link>
                    )}
                    <ThemeButton />
                </div>
            </div>
        </header>
    )
}
