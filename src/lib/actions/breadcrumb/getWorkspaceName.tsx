"use server"

import { neon } from "@neondatabase/serverless";

export async function getWorkspaceName(workspaceId: string) {

    const sql = neon(`${process.env.DATABASE_URL}`);
    const workspace_data = await sql`
        SELECT name
        FROM workspaces
        WHERE id = ${workspaceId}
    `;
    return workspace_data[0].name;


}