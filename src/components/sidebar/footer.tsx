"use client"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { CiSettings } from "react-icons/ci";
import Preferences from "@/components/preferences/preferences";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Footer() {
    const router = useRouter();
    const { data: session } = useSession();
    const handleSignOut = () => {
        signOut({ redirect: false })
            .then(() => {
                router.push("/auth");
            });
    }

    return (
        <div className="flex flex-col mt-auto p-4 gap-2">
            <Separator className="w-full"/>
            <div className="flex flex-row gap-1 bg-primary hover:bg-primary/80 transition p-2 rounded-md items-center hover:cursor-pointer" ><CiSettings />Settings</div>
            <div>
                <Popover>

                    <PopoverTrigger className="flex flex-row gap-1 bg-primary hover:bg-primary/80 transition p-2 rounded-md items-center hover:cursor-pointer w-full">
                    <div className="flex flex-row gap-1 items-center">
                        <Avatar className="size-6">
                            <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} />
                            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        Account
                    </div>

                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <Avatar>
                                <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} />
                                <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {session?.user?.name}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Dialog >

                                <DialogTrigger asChild>
                                    <Button size="sm" variant="outline" className="w-full text-md">Preferences</Button>
                                </DialogTrigger>
                                <Preferences />
                            </Dialog>
                            <div><Button size="sm" variant="destructive" className="w-full text-md" onClick={handleSignOut}>Logout</Button></div>
                        </div>
                        
                    </PopoverContent>
                </Popover>
            </div>
        </div>

    )
}