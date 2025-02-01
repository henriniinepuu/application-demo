"use client"

import { ColumnDef } from "@tanstack/react-table"
import { PasswordType } from "@/dummy-data/passwords"
import {  UserRound, KeyRound, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<PasswordType>[] = [
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const password = row.original
     
          return (
            <div>
                <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(password.username)}>
              <UserRound /> Copy Username 
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(password.password)}>
              <KeyRound /> Copy Password 
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(password.url)}>
              <ShieldAlert /> Copy URL 
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
            </div>
          )
        },
      },
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
        accessorKey: "username",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Username
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "password",
        header: "Password",
    },
    {
        accessorKey: "url",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                URL
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "notes",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Notes
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            )
          },
    },
]
