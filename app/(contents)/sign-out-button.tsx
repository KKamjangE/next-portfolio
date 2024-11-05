"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export default function SignOutButton() {
    const onSignOut = async () => {
        await signOut()
    }
    return (
        <Button variant={"link"} onClick={onSignOut}>
            SignOut
        </Button>
    )
}
