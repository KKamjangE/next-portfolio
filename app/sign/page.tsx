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
        <div className="mx-auto mt-10 max-w-screen-md p-5 md:mt-32">
            <h1 className="text-lg font-semibold">
                소셜 계정으로 간편하게 로그인하기
            </h1>
            <p className="mt-5">
                로그인 하시면 포트폴리오에 대한 피드백을 남기실 수 있어요.
            </p>
            <div className="mt-16 flex flex-col items-center gap-5 lg:flex-row">
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
