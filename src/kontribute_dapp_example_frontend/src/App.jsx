import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home, Create, Stories, Marketplace } from "./pages";
import { useAnvilSelector } from "@vvv-interactive/nftanvil-react";

/* app component implements react router and helps
us to navigate to different components throughout the app */

const App = () => {
  // *REQUIRED* 
  // loads the Anvil canister cluster:
  const loaded = useAnvilSelector((state) => state.user.map.history);

  if (!loaded) return "Loading...";
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
};

export default App;
