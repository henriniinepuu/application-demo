import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea"
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"
  
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { createCustomer } from "@/lib/actions/createCustomer";
import { useState } from "react";

export function AddCustomerCard() {
    const [customerName, setCustomerName] = useState("");
    const [customerCategory, setCustomerCategory] = useState("");
    const [customerType, setCustomerType] = useState("");
    const [customerNotes, setCustomerNotes] = useState("");
    const [error, setError] = useState("");

    const handleAddCustomer = async () => {
        try {
            await createCustomer(customerName, customerCategory, customerType, customerNotes);
            // Success - the dialog will close automatically because we wrapped the button with DialogClose
        } catch (err) {
            console.error(err);
            setError("Failed to add customer. Please try again.");
        }
    };


    return (
        <div>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a new customer</DialogTitle>
                    <DialogDescription>
                        
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <div className="text-md">Customer name</div>
                <Input type="text" placeholder="Name" onChange={(e) => setCustomerName(e.target.value)}/>
                <div className="text-md">Category</div>
                <Select onValueChange={(value) => setCustomerCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Internal">Internal</SelectItem>
                        <SelectItem value="External">External</SelectItem>
                    </SelectContent>
                </Select>

                <div className="text-md">Type</div>
                <Select onValueChange={(value) => setCustomerType(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Team 1">Team 1</SelectItem>
                        <SelectItem value="Team 2">Team 2</SelectItem>
                        <SelectItem value="Team 3">Team 3</SelectItem>
                    </SelectContent>
                </Select>
                <div>Notes</div>
                <Textarea placeholder="Notes" onChange={(e) => setCustomerNotes(e.target.value)}/>
                <Separator />
                {error && (
                    <div className="text-sm text-destructive mb-2">{error}</div>
                )}
                <div className="flex flex-row gap-4 justify-between">
                    <DialogClose asChild>
                        <Button variant="destructive">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={handleAddCustomer}>Add</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </div>
    )
}
