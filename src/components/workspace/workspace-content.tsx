import { columns } from "./columns";

import { workspaces } from "@/dummy-data/workspaces";

import { DataTable } from "../ui/data-table";



export default function WorkspaceContent({className}: {className?: string}) {
    return (
        <div className={className}>
            <div className="text-2xl font-bold pb-4">Select workspace that you would like to use</div>
            <DataTable columns={columns} data={workspaces} path="workspaces"  />
        </div>


    )
}
