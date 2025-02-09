"use server"

import { neon } from "@neondatabase/serverless";

export async function getCustomerName(customerId: string) {

    const sql = neon(`${process.env.DATABASE_URL}`);


    const customers_data = await sql`
        SELECT name
        FROM customers
        WHERE id = ${customerId}
    `;


    return customers_data[0].name;

}