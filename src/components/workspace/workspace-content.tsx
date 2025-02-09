"use client"
import { columns } from "./columns";
import { WorkspaceType } from "@/types/workspaces";
import { DataTable } from "../ui/data-table";
import { useEffect, useState } from "react";
import { getWorkspaces } from "@/lib/actions/getWorkspaces";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CreateWorkspaceCard from "./create-workspace-card";

export default function WorkspaceContent({className}: {className?: string}) {
    const [workspaceData, setWorkspaceData] = useState<WorkspaceType[]>([]); 
    const [isLoading, setIsLoading] = useState(true);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.user?.id) {
            getWorkspaces(session.user.id).then((data) => {
                setWorkspaceData(data as WorkspaceType[]);
                setIsLoading(false);
                if (data.length === 1) {
                    router.push(`/${data[0].id}`);
                }
            });
        }
    }, [session, router]);

    if (isLoading) {
        return null; // or a loading spinner
    }

    return (
        <div className={className}>
            {workspaceData.length === 0 && (
                <div>
                    <div className="text-2xl font-bold pb-4">Create a workspace to get started</div>
                    <CreateWorkspaceCard />
                </div>
            )}
            {workspaceData.length > 1 && (
                <div>
                    <div className="text-2xl font-bold pb-4">Select workspace that you would like to use</div>
                    <DataTable columns={columns} data={workspaceData} path="workspaces" />
                </div>
            )}
        </div>
    );
}
