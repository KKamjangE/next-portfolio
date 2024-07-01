import SignOutButton from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
    const session = await getAuthSession();

    return (
        <main className="mx-auto flex-col">
            <div className="flex items-center justify-center gap-10 p-5">
                {session?.user.id ? (
                    <SignOutButton />
                ) : (
                    <Link href={"/sign"}>
                        <Button variant={"link"}>SignIn</Button>
                    </Link>
                )}
                <Link href={"/feedback"}>
                    <Button variant={"link"}>Feedback</Button>
                </Link>
            </div>
        </main>
    );
}
