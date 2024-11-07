import Link from "next/link"

import MainNav from "@/components/layouts/main-nav"
import MainSideNav from "@/components/layouts/main-side-nav"
import SignOutButton from "@/components/layouts/sign-out-button"
import ThemeButton from "@/components/layouts/theme-button"
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
