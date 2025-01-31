"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function AuthPage() {
  const router = useRouter();

  return (
  <div className="flex flex-col items-center justify-center h-screen w-screen"> 
    <div className="flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-md p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <Input className="w-full" type="text" placeholder="Email" />
      <Input className="w-full" type="password" placeholder="Password" />
      <Button className="w-full" onClick={() => router.push("/112233445566")}>Login</Button>

      <Separator className="w-full" />

      <Button className="w-full"><FcGoogle /> Login with Google</Button>
      <Button className="w-full"><FaGithub /> Login with Github</Button>

      <p>Don&apos;t have an account? Register</p>
    </div>
  </div>
  );
}
