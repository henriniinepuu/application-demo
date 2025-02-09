"use server"

import { neon } from "@neondatabase/serverless";

export async function createWorkspace(workspaceName: string, workspaceType: string, owner: string) {

    const sql = neon(`${process.env.DATABASE_URL}`);

    const workspace_data = await sql`
    INSERT INTO workspaces (
        id, 
        name,
        type,
        owner
    )
    SELECT 
        (SELECT COALESCE(MAX(id), 0) + 1 FROM workspaces),
        ${workspaceName},
        ${workspaceType},
        ${owner}
    RETURNING id

`;

return workspace_data[0].id;
}