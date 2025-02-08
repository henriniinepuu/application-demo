"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";


export default function Auth() {
    return (
        <div>
            <Button onClick={() => signIn('google')}>Sign in with Google</Button>
            <Button onClick={() => signIn('github')}>Sign in with Github</Button>
        </div>
    )
}
