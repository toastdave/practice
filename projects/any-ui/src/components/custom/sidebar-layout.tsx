import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import LeftSideBar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import { Button } from "../ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Panel } from "react-resizable-panels";

type SidebarLayoutProps = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <SidebarProvider>
      <LeftSideBar />
      <ResizablePanelGroup direction="horizontal">
        <Panel className="bg-amber-200 min-h-dvh">
            
      <main className="bg-blue-500 flex flex-1 ">    
      <SidebarTrigger className="bg-red-400"/>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </main>
        </Panel>
        <ResizableHandle />
      <ResizablePanel collapsible={true} minSize={10} collapsedSize={1} defaultSize={20} className="flex flex-col bg-red-300">
        oof
      </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarProvider>
  );
};

export default SidebarLayout;
