"use client"

import { ColumnDef } from "@tanstack/react-table"
import { WorkspaceType } from "@/dummy-data/workspaces"

import { Button } from "@/components/ui/button"
import {  ArrowUpDown } from "lucide-react"


export const columns: ColumnDef<WorkspaceType>[] = [
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
        accessorKey: "type",
        header: ({ column }) => {
            return (

              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Type
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>

            )
          },
    },
    

]
