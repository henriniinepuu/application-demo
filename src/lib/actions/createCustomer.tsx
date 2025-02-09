"use server"

import { neon } from "@neondatabase/serverless";

export async function createCustomer(customerName: string, customerCategory: string, customerType: string, customerNotes: string) {


    const sql = neon(`${process.env.DATABASE_URL}`);

    const customer_data = await sql`
    INSERT INTO customers (
        id, 
        name,
        category,
        status,
        notes

    )

    SELECT 
        (SELECT COALESCE(MAX(id), 0) + 1 FROM customers),
        ${customerName},
        ${customerCategory},
        ${customerType},
        ${customerNotes}

    RETURNING name

`;

return customer_data[0].name;
}