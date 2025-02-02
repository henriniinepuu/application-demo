"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CustomerType } from "@/dummy-data/customers"

import { Button } from "@/components/ui/button"
import {  ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<CustomerType>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Name
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "category",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Category
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Status
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "notes",
        header: "Notes",
    },
]
