
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import SidebarContent from "@/components/sidebar/sidebarContent";

import Footer from "@/components/sidebar/footer";
import { ThemeProvider } from "@/components/theme-provider";


export default function WorkspaceIDLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row justify-center h-screen w-screen">
    <div className=" flex flex-col w-[250px] h-screen " >
        <div className="text-center content-center h-10 ">Customer switcher</div>
        <div className="text-center content-center h-10 "><Input placeholder="Search" /></div>
        <Separator  />
        <SidebarContent />
        <Footer />
    </div>
    <div className="flex flex-col w-full">
        <div className=" h-screen" >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></div>
    </div>
  </div>
  );
}
