import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { COLORS } from "@/constants/Uiconstants";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: COLORS.background,
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      <div style={{ flex: 1, marginLeft: "240px" }}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main
          style={{
            marginTop: "64px", // offset for fixed Navbar
            padding: "1.5rem",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
