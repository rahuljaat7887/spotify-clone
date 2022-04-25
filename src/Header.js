import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useDataLayerVAlue } from "./DataLayer";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useDataLayerVAlue();
  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input type="text" placeholder="Search for Artists, songs and albums" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
