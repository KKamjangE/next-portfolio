import SignOutButton from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
    const session = await getAuthSession();

    return (
        <main className="mx-auto flex-col">
            <div className="flex items-center justify-center gap-10 p-5">
                <Button
                    className="bg-amber-500 hover:bg-amber-400"
                    variant={"outline"}
                    size={"lg"}
                >
                    Amber-500
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-500" size={"lg"}>
                    Blue-600
                </Button>
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
