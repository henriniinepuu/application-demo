
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import SidebarContent from "@/components/sidebar/sidebarContent";

import Footer from "@/components/sidebar/footer";


export default function WorkspaceIDLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row justify-center h-screen w-screen">
    <div className=" flex flex-col w-[250px] bg-gray-200 h-screen " >
        <div className="text-center content-center h-10 bg-gray-300 border-2 border-gray-900">Organization switcher</div>
        <div className="text-center content-center h-10 bg-gray-300 border-2 border-gray-900"><Input placeholder="Search" /></div>
        <Separator  />
        <SidebarContent />
        <Footer />
    </div>
    <div className="flex flex-col w-full">
        <div className=" bg-gray-300 h-screen" >{children}</div>
    </div>
  </div>
  );
}

