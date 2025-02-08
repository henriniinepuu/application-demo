import { signIn } from "next-auth/react"

export function githubLogin() {
    return signIn('github', { redirectTo: '/' })
}

export function googleLogin() {
    return signIn('google', { redirectTo: '/' })
}