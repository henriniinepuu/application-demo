"use client"

import { DataTable } from "../ui/data-table"
import { columns } from "../customers/columns"
import { CustomerType } from "@/types/customers"
import { getCustomers } from "@/lib/actions/getCustomers";
import { useEffect, useState } from "react";
import { AddCustomerCard } from "../customers/addCustomerCard";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";


interface CustomersCardProps {
  className?: string;
}



export function CustomersCard({ className }: CustomersCardProps) {
    const [customersData, setCustomersData] = useState<CustomerType[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
          getCustomers().then((data) => {
            setCustomersData(data as CustomerType[]);
        });
    }, []);


  return (
    <div className={className}>
      <div className="">
        <div className="flex flex-row items-center justify-between space-x-4 mb-4">
          <div className="font-bold text-2xl">This is a list of all customers</div>
          <div className="ml-auto">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>
                  Add Customer
                </Button>
              </DialogTrigger>
              <AddCustomerCard onSuccess={() => setOpen(false)} />

            </Dialog>
          </div>
        </div>

        <div className="mt-4">
          <DataTable columns={columns} data={customersData} path="customers" />

        </div>
       </div>
    </div>



  )
}
