
import { Button } from "@/components/ui/button";
import WorkspaceContent from "@/components/workspace/workspace-content";


export default async function Home(
  
) {
  return (
    <div>

        <div className="flex flex-col gap-4 justify-center items-center pt-10">
          <div className="">
            <h1>Welcome </h1>
            <WorkspaceContent className="pt-20"/>
            
            <Button >Sign out</Button>

          </div>
        </div>


    </div>
  );
}

