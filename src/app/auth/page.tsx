"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

import { githubLogin, googleLogin } from "@/app/actions/useLogin";

export default function Auth() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={cn("flex flex-col gap-6 max-w-md items-center justify-center")}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">

          <Image src="/logo.svg" alt="Logo" width={200} height={100} />
          <h1 className="text-xl font-bold pt-4">Welcome to Logoipsum</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-center text-sm">We don&apos;t allow typical username and password!? <br /><a href="#" className="underline underline-offset-4">Read here why?</a>.</div>
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => googleLogin()}
          >
            <FcGoogle className="size-4" />
            Continue with Google
          </Button>

          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => githubLogin()}
          >
            <FaGithub className="size-4" />
            Continue with Github
          </Button>
        </div>
      </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
    </div>
  )
}

