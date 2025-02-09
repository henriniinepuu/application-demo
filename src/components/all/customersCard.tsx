"use client"

import { DataTable } from "../ui/data-table"
import { columns } from "../customers/columns"
import { CustomerType } from "@/types/customers"
import { getCustomers } from "@/lib/actions/getCustomers";
import { useEffect, useState } from "react";
import { AddCustomerCard } from "../customers/addCustomerCard";
import { DialogTrigger } from "../ui/dialog";
import { Dialog } from "../ui/dialog";
import { Button } from "../ui/button";


interface CustomersCardProps {
  className?: string;
}



export function CustomersCard({ className }: CustomersCardProps) {

    const [customersData, setCustomersData] = useState<CustomerType[]>([]);

    useEffect(() => {
          getCustomers().then((data) => {
            setCustomersData(data as CustomerType[]);
        });
    }, []);


  return (
    <div className={className}>
      <div className="">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-2xl">This is a list of all customers</div>
          <Dialog >
            <DialogTrigger className="bg-primary hover:bg-primary/80" asChild>
              <Button>
                Add Customer
              </Button>
            </DialogTrigger>
            <AddCustomerCard />

          </Dialog>
        </div>

        <div className="mt-4">
          <DataTable columns={columns} data={customersData} path="customers" />

        </div>
       </div>
    </div>



  )
}
