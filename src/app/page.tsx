"use client"
import { Button } from "@/components/ui/button";
import WorkspaceContent from "@/components/workspace/workspace-content";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/auth");
}
  return (
    <div>
        <div className="flex flex-col gap-4 justify-center items-center pt-10">
          <div className="">
            <h1>Welcome </h1>
            <WorkspaceContent className="pt-20"/>
            <Button onClick={handleSignOut}>Sign out</Button>
          </div>
        </div>
    </div>

  );
}

