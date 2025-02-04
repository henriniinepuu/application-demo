"use client"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog,  DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import Preferences from "@/components/preferences/preferences";
import { signOut } from "@/auth";

export default function Footer() {
    const router = useRouter();
    const handleLogout = async () => {
        await signOut();
        router.push("/auth");
    }
    return (
        <div className="flex flex-col mt-auto p-4 gap-2">
            <Separator className="w-full"/>
            <div className="flex flex-row gap-1 bg-gray-300 hover:bg-gray-400 transition p-2 rounded-md items-center hover:cursor-pointer" onClick={() => router.push("/settings")}><CiSettings />Settings</div>
            <div>
                <Popover>
                    <PopoverTrigger className="flex flex-row gap-1 bg-gray-300 hover:bg-gray-400 transition p-2 rounded-md items-center hover:cursor-pointer w-full">
                    <div className="flex flex-row gap-1 items-center">
                        <Avatar className="size-6">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        Account
                    </div>
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            Your name
                        </div>
                        <div className="flex flex-col gap-2">
                            <Dialog >
                                <DialogTrigger asChild>
                                    <Button size="sm" variant="outline" className="w-full text-md">Preferences</Button>
                                </DialogTrigger>
                                <Preferences />
                            </Dialog>
                            <div><Button size="sm" variant="destructive" className="w-full text-md" onClick={handleLogout}>Logout</Button></div>
                        </div>
                        
                    </PopoverContent>
                </Popover>
            </div>
        </div>

    )
}