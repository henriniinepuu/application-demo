"use client"
import { CiLocationOn } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { LuKeyRound } from "react-icons/lu";
import { usePathname } from "next/navigation";

export default function SidebarContent() {
    const pathname = usePathname();
    
    
    const projectId = pathname.split('/')[2];
    
    // Workspace-level content
    const WorkspaceContent = () => (
        <div className="flex flex-col gap-2">
            <div className="text-md font-semibold">Customers overview</div>
            <div className="text-sm pl-4">
                <div>All customers</div>
                <div>All assets</div>
            </div>
        </div>
    );

    // Project-level content
    const ProjectContent = () => (
        <div className="flex flex-col gap-2">
            <div className="text-md">Home</div>
            <div className="text-md">Core information</div>
            <div className="text-sm pl-4">
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Locations</div>
                <div className="flex flex-row gap-1 items-center"><TiContacts />Contacts</div>
                <div className="flex flex-row gap-1 items-center"><LuKeyRound />Passwords</div>
            </div>
            <div className="text-md">Devices</div>
            <div className="text-sm pl-4">
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />All devices</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Network</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Servers</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Workstations</div>
                <div className="flex flex-row gap-1 items-center"><CiLocationOn />Other</div>
            </div>
            <div className="text-md">Processes</div>
            <div className="text-sm pl-4">
                <div>Documents</div>
                <div>Account management</div>
                <div>Device set-up</div>
            </div>
        </div>
    );

    // Settings content
    const SettingsContent = () => (
        <div className="flex flex-col gap-2">
            <div className="text-md font-semibold">Settings</div>
            <div className="text-sm pl-4">
                <div>General</div>
                <div>Security</div>
                <div>Notifications</div>
                <div>Integrations</div>
                <div>Billing</div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col p-4 gap-4">
            {pathname.endsWith('/settings') && <SettingsContent />}
            {projectId && !pathname.endsWith('/settings') && <ProjectContent />}
            {!projectId && !pathname.endsWith('/settings') && <WorkspaceContent />}
        </div>
    );
}