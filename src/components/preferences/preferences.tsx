"use client"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PrefProfile from "@/components/preferences/prefProfile";
import PrefLanguage from "@/components/preferences/prefLanguage";
import PrefAppearance from "@/components/preferences/prefAppearance";


export default function Preferences() {
    const [pref, setPref] = useState("profile");
    return (
        <div>
            <DialogContent className="flex h-[90%] min-w-[300px] w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1000px] flex-col">
                <DialogHeader>
                    <DialogTitle>Preferences</DialogTitle>
                    <DialogDescription>Manage your preferences</DialogDescription>
                </DialogHeader>
                
                {/* Main content area with flex-grow to push footer down */}
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row gap-2 flex-1">
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="bg-primary hover:bg-primary/80 transition p-2 rounded-md items-center hover:cursor-pointer w-full" onClick={() => setPref("profile")}>Profile</div>
                            <div className="bg-primary hover:bg-primary/80 transition p-2 rounded-md items-center hover:cursor-pointer w-full" onClick={() => setPref("appearance")}>Appearance</div>
                            <div className="bg-primary hover:bg-primary/80 transition p-2 rounded-md items-center hover:cursor-pointer w-full" onClick={() => setPref("language")}>Language</div>
                        </div>
                        <div className="w-full text-sm p-2">
                            {pref === "profile" && <PrefProfile />}

                            {pref === "appearance" && <PrefAppearance />}
                            {pref === "language" && <PrefLanguage />}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-row gap-2 justify-between mt-4 pt-4 border-t">
                    <DialogClose asChild>
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
                    </DialogClose>
                    <DialogClose asChild>
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
                    </DialogClose>
                    
                </div>
            </DialogContent>
        </div>
    )
}