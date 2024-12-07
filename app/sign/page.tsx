"use client"

import { signIn } from "next-auth/react"

import GithubIcon from "@/public/github.svg"
import GoogleIcon from "@/public/google.svg"

import { Button } from "@/components/ui/button"

export default function Sign() {
    const loginWithGithub = async () => {
        await signIn("github")
    }

    const loginWithGoogle = async () => {
        await signIn("google")
    }

    return (
        <div className="mx-auto mt-10 max-w-screen-md p-5">
            <h1 className="text-2xl font-semibold">
                소셜 계정으로 간편하게 로그인하기
            </h1>
            <div className="mt-14 flex flex-col items-center gap-5 lg:flex-row">
                <Button
                    onClick={loginWithGithub}
                    variant={"default"}
                    className="text-md flex w-full items-center justify-center gap-3 bg-neutral-950 font-medium hover:bg-neutral-950/90 dark:bg-neutral-50 dark:hover:bg-neutral-50/90"
                >
                    <div className="size-7 fill-white dark:fill-black">
                        <GithubIcon />
                    </div>
                    <span>Continue with Github</span>
                </Button>
                <Button
                    onClick={loginWithGoogle}
                    variant={"default"}
                    className="text-md flex w-full items-center justify-center gap-3 border border-neutral-400 bg-neutral-50 font-medium text-neutral-950 hover:bg-neutral-50/90 dark:bg-neutral-50 dark:hover:bg-neutral-50/90"
                >
                    <div className="size-7">
                        <GoogleIcon />
                    </div>
                    <span>Continue with Google</span>
                </Button>
            </div>
        </div>
    )
}
