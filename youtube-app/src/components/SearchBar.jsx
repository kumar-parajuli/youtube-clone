import { IconButton, Paper } from "@mui/material";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        boarder: "1px solid #e3e3e3",
        paddingLeft: 2,
        boxShadow: "none",
        marginRight: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <SearchRoundedIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
