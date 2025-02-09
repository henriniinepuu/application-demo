import WorkspaceContent from "@/components/workspace/workspace-content";


export default function Home() {

  return (
    <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center pt-10 w-full ">
          <div className="flex flex-col w-full justify-center items-center">
            <WorkspaceContent className="pt-20 "/>
          </div>
        </div>
    </div>


  );
}

