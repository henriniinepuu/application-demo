import { CiLocationOn } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { LuKeyRound } from "react-icons/lu";

export default function SidebarContent() {
    return (
        <div>
            <div className="flex flex-col flex-1">
            <div className="text-md">Home</div>
            <div className="text-md">Core information</div>
            <div className="text-sm pl-4" >
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Locations</div>
                <div className="flex flex-row gap-1 items-center"><TiContacts />Contacts</div>
                <div className="flex flex-row gap-1 items-center"><LuKeyRound />Passwords</div>
            </div>
            <div className="text-md">Devices</div>
            <div className="text-sm pl-4" >
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />All devices</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Network</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Servers</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Mis nimi siia?</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Other</div>

            </div>
            <div className="text-md">Proccesses</div>
            <div className="text-sm pl-4" >
                <div>Documents</div>
                <div>Account management</div>
                <div>Device set-up</div>
            </div>
        </div>
        </div>
    )
}