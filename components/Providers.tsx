'use client';

import { ProSidebarProvider } from "react-pro-sidebar";


export function Providers({ children }: {
    children: React.ReactNode
}) {
  return (
    <ProSidebarProvider>
        {children}
    </ProSidebarProvider>
        
     
  );
}