"use server"

import { neon } from "@neondatabase/serverless";

export async function getCustomers() {

    const sql = neon(`${process.env.DATABASE_URL}`);

    const customers_data = await sql`
        select *
        from customers
    `;

    return customers_data;
}