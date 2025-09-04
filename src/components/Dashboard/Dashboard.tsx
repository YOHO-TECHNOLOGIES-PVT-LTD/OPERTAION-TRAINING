import React from "react";
import { COLORS } from "../../constants/Uiconstants";
const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: COLORS.primary }}>Dashboard</h1>
      <p style={{ color: COLORS.textPrimary }}>Welcome to your task management app </p>
    </div>
  );
};

export default Dashboard;
