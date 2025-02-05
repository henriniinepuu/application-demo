import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import WorkspaceContent from "@/components/workspace/workspace-content";
import { redirect } from "next/navigation";

export default async function Home() {


  const session = await auth();
  const handleSignOut = async () => {
    "use server"
    await signOut();
    redirect("/auth");
  }



  return (
    <div>


      {!session ? (
        redirect("/auth")
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center pt-10">
          <div className="">
            <h1>Welcome {session.user?.name}</h1>
            <WorkspaceContent className="pt-20"/>
            
            <Button onClick={handleSignOut}>Sign out</Button>

          </div>
        </div>

      )}


    </div>
  );
}

