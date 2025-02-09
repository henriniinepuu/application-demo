"use client"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import SidebarContent from "@/components/sidebar/sidebarContent";

import Footer from "@/components/sidebar/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCustomerName } from "@/lib/actions/breadcrumb/getCustomerName";
import { getWorkspaceName } from "@/lib/actions/breadcrumb/getWorkspaceName";

export default function WorkspaceIDLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const workspaceId = useParams().workspaceid;
  const customerId = useParams().projectid;
  const [customerNameBreadcrumb, setCustomerNameBreadcrumb] = useState<string>("");
  const [workspaceNameBreadcrumb, setWorkspaceNameBreadcrumb] = useState<string>("");

  useEffect(() => {
    const fetchCustomerName = async () => {
      if (customerId) {
        const name = await getCustomerName(customerId as string);
        setCustomerNameBreadcrumb(name);
      }
      if (workspaceId) {
        const name = await getWorkspaceName(workspaceId as string);
        setWorkspaceNameBreadcrumb(name);
      }
    };
    fetchCustomerName();
  }, [customerId, workspaceId]);






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
        <div className="pt-2 pl-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${workspaceId}`}>{workspaceNameBreadcrumb}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>



                <BreadcrumbLink href={`/${workspaceId}/${customerId}`}>{customerNameBreadcrumb}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>


                <BreadcrumbPage>This page</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className=" h-screen" >
          {children}
        </div>
      </div>
    </div>
  );
}
