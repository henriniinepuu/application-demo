import { signIn } from "next-auth/react"

export async function useGithubLogin() {
    await signIn('github', { redirectTo: '/' })
}

export async function useGoogleLogin() {
    await signIn('google', { redirectTo: '/' })
}