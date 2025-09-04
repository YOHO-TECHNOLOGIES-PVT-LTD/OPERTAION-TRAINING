import React, { useState } from "react";

interface NavBarProps {
  brandName: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ brandName, navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>{brandName}</div>
      <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "15px", marginTop: "8px" }}>
        {navItems.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            style={{
              cursor: "pointer",
              fontWeight: selectedIndex === index ? "bold" : "normal",
              color: selectedIndex === index ? "blue" : "black",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
