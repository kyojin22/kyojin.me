import { useState } from "react";
import { Navbar } from "@/common/components/Navbar";
import { Sidebar } from "@/common/components/Sidebar";
import { Footer } from "@/common/components/Footer";
import Router from "./router";

export default function App() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="min-h-screen flex flex-col 2xl:justify-start relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Router />
      <Footer />
    </div>
  );
}
