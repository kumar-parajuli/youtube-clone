import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetails,
} from "./components";
import { Box } from "@mui/material";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "black" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
