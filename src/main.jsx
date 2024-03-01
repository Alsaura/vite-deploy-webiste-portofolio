import React from "react";
import ReactDOM from "react-dom/client";
import Portofolio from "../src/pages/Portofolio.jsx";
import Navbar from "./pages/Navbar.jsx";
import Biodata from "./pages/Biodata.jsx";
import "./index.css";
import Experience from "./pages/Experience.jsx";
import Gridcol from "./pages/Gridcol.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Portofolio />
    <Biodata />
    <Experience />
    <Gridcol />
  </React.StrictMode>
);
