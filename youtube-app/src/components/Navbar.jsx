import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="centers"
    p={2}
    sx={{
      position: "sticky",
      backgroung: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" styled={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
