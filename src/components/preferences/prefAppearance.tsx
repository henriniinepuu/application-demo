"use client"
 
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export default function PrefAppearence() {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <div className="flex flex-row gap-2">
                <div>Theme</div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                {theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System"}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            This is appearance page. Here you can manage your appearance settings.
            Something here also and why not here.
            Settings are like:
            - Theme
            - sizes
            - fonts
            - colors
            - etc.
        </div>
    )
}
