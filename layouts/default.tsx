import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-svh">
      <Head />
      <main className="flex-1 flex flex-col">
        {/* Main Navbar */}
        <div className="flex-1 bg-white px-4 overflow-auto flex items-center justify-center">
          {children}
        </div>
      </main>
    </div>
  );
}
