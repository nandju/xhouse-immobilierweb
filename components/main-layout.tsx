import type React from "react"
import { DesignSidebar } from "@/components/design-sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Sidebar - Fixed position: Desktop 30%, Tablet 40%, Mobile: normal flow at top */}
      <aside className="w-full md:fixed md:left-0 md:top-0 md:w-[42%] md:h-screen lg:w-[32%] z-10">
        <DesignSidebar />
      </aside>

      {/* Main Content - Offset by sidebar width on tablet/desktop */}
      <main className="w-full md:ml-[42%] md:w-[58%] lg:ml-[32%] lg:w-[68%] min-h-screen overflow-y-auto overflow-x-hidden bg-background">
        {children}
      </main>
    </div>
  )
}
