"use server"

import { neon } from "@neondatabase/serverless";

export async function getWorkspaces(userId: string) {

    const sql = neon(`${process.env.DATABASE_URL}`);

    const workspaces_data = await sql`
        select *
        from workspaces
        where owner = ${userId}
    `;



    return workspaces_data;
}