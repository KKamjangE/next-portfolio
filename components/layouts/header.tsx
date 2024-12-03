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
        <header className="sticky top-0 z-[500] border-b border-neutral-600 backdrop-blur">
            <div className="m-auto flex h-16 max-w-screen-lg items-center justify-start px-5 *:flex *:items-center md:justify-between">
                <MainSideNav />
                <MainNav />
                <div className="ml-auto md:ml-0">
                    {session?.user.id ? (
                        <SignOutButton />
                    ) : (
                        <Link href={"/sign"}>
                            <Button variant={"link"} className="text-md">
                                SignIn
                            </Button>
                        </Link>
                    )}
                    <ThemeButton />
                </div>
            </div>
        </header>
    )
}
