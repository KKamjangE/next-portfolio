"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
    const onSignOut = async () => {
        await signOut();
    };
    return (
        <Button variant={"link"} onClick={onSignOut}>
            SignOut
        </Button>
    );
}
