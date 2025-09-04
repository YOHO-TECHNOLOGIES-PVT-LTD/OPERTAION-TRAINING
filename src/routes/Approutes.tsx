import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/Mainlayout";

// Pages
import Dashboard from "@/components/Dashboard/Dashboard";
import Projects from "@/components/Projects/project";
import Tasks from "@/components/Tasks/task";
import Profile from "@/pages/profile/profile";

const Approutes: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Profile />} />
      </Routes>
    </MainLayout>
  );
};

export default Approutes;
