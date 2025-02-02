import { LoginCard } from "@/components/auth/login-card"

export default function Auth2() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-md border-solid border-2 rounded-md p-4">
                <LoginCard />
            </div>
        </div>
    )
}

