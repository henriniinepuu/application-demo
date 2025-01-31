"use client"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import PrefProfile from "../preferences/prefProfile";
import PrefAppearence from "../preferences/prefAppearence";
import { useState } from "react";

export default function Footer() {
    const router = useRouter();
    const [pref, setPref] = useState("profile");

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
                                <DialogContent className="min-w-[300px] w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1000px]">
                                    <DialogHeader>
                                    <DialogTitle>Preferences</DialogTitle>
                                    <div className="flex flex-col gap-2">
                                        <DialogDescription>Manage your preferences</DialogDescription>
                                        <div className="flex flex-row gap-2">
                                        <div className="flex flex-col gap-2 text-sm ">
                                            <div className="bg-gray-300 hover:bg-gray-400 transition p-2 rounded-md items-center hover:cursor-pointer w-full" onClick={() => setPref("profile")}>Profile</div>
                                            <div className="bg-gray-300 hover:bg-gray-400 transition p-2 rounded-md items-center hover:cursor-pointer w-full" onClick={() => setPref("appearance")}>Appearance</div>
                                            <div className="bg-gray-300 hover:bg-gray-400 transition p-2 rounded-md items-center hover:cursor-pointer w-full" onClick={() => setPref("language")}>Language</div>

                                        </div>
                                        <div className="bg-gray-100 w-full text-sm p-2">
                                            {pref === "profile" && <PrefProfile />}
                                            {pref === "appearance" && <PrefAppearence />}
                                        </div>
                                        </div>
                                        <div className="flex flex-row gap-2 justify-between pt-4">
                                            <Button 
                                                variant="destructive" 
                                                onClick={() => {
                                                    const closeButton = document.querySelector('[data-dialog-close]');
                                                    if (closeButton instanceof HTMLElement) {
                                                        closeButton.click();
                                                    }
                                                }}
                                            >
                                                Discard
                                            </Button>
                                            <Button 
                                                onClick={() => {
                                                    const closeButton = document.querySelector('[data-dialog-close]');
                                                    if (closeButton instanceof HTMLElement) {
                                                        closeButton.click();
                                                    }
                                                }}
                                            >
                                                Confirm
                                            </Button>
                                        </div>
                                    </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            <div><Button size="sm" variant="destructive" className="w-full text-md" onClick={() => router.push("/auth")}>Logout</Button></div>
                        </div>
                        
                    </PopoverContent>
                </Popover>
            </div>
        </div>

    )
}