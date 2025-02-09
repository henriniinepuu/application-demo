import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { createWorkspace } from "@/lib/actions/createWorkspace";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateWorkspaceCard() {
    const router = useRouter();
    const [workspaceType, setWorkspaceType] = useState("free");
    const [workspaceName, setWorkspaceName] = useState("");
    const [owner, setOwner] = useState("0");
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.id) {
            setOwner(session.user.id);
        }
    }, [session]);

    const handleCreateWorkspace = async () => {
        const newWorkspaceId = await createWorkspace(workspaceName, workspaceType, owner);
        router.push(`/${newWorkspaceId}`);
    };

    return (
        <div className="max-w-xl flex  flex-col gap-4">

            <div>Workspace is top-level grouping for your data. You can share the data eather on the workspace level or the customer level</div>
            <div className="flex flex-col gap-2">
                <Input type="text" placeholder="Workspace Name" value={workspaceName} onChange={(e) => setWorkspaceName(e.target.value)} />
                <div className="pt-4">Select workspace type</div>
                <div className="flex flex-row gap-2 justify-between">
                    <div 
                        className={`
                            hover:cursor-pointer 
                            rounded-md 
                            p-2 
                            ${workspaceType === "free" ? "bg-primary text-primary-foreground" : "bg-secondary "}`} 
                        onClick={() => setWorkspaceType("free")}
                    >

                        <div>Free</div>
                        <div className="text-xs">
                            <div>- 500 MB free storage</div>
                            <div>- 1 customer</div>
                            <div>- Share with 5 other team members</div>

                        </div>
                    </div>
                    <div className={`hover:cursor-pointer rounded-md p-2 ${workspaceType === "professional" ? "bg-primary text-primary-foreground" : "bg-secondary "}`} onClick={() => setWorkspaceType("professional")}>
                        <div>Professional</div>
                        <div className="text-xs">
                            <div className="italic"> Everything in Free, plus:</div>

                            <div>- API access</div>
                            <div>- Unlimited customers</div>
                            <div>- Share with unlimited team members</div>
                        </div>
                    </div>
                    <div className={`hover:cursor-pointer rounded-md p-2 ${workspaceType === "enterprise" ? "bg-primary text-primary-foreground" : "bg-secondary "}`} onClick={() => setWorkspaceType("enterprise")}>
                        <div>Enterprise</div>
                        <div className="text-xs">

                            <div className="italic"> Everything in Professional, plus:</div>
                            <div>- Priority support</div>
                            <div>- Share with unlimited end-users</div>
                            <div>- Dedicated server</div>
                            <div>- Possibility to add custom SQL database</div>
                            <div>- SQL report builder</div>
                        </div>
                    </div>
                </div>
                <Button 
                    disabled={workspaceType === "" || workspaceName === ""} 
                    onClick={handleCreateWorkspace}
                >
                    Create Workspace
                </Button>
            </div>
            


        </div>
    )
}
