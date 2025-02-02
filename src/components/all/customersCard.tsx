"use client"

import { DataTable } from "../ui/data-table"
import { columns } from "../customers/columns"
import { customers } from "@/dummy-data/customers"

interface CustomersCardProps {
  className?: string;
}



export function CustomersCard({ className }: CustomersCardProps) {

  return (
    <div className={className}>
      <div className="">
          <div className="font-bold text-2xl">
              This is a list of all customers
          </div>
          <DataTable columns={columns} data={customers} path="customers" />
       </div>
    </div>
  )
}
