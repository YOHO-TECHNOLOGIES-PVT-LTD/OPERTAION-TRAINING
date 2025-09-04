import React from "react";
import { COLORS } from "../../constants/Uiconstants";
const Profile: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: COLORS.primary }}>Profile</h1>
      <p style={{ color: COLORS.textPrimary }}>Manage your profile settings here</p>
    </div>
  );
};

export default Profile;
