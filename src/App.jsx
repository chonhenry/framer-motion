import { useState } from "react";
import AnimationControls from "./components/AnimationControls";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import ScrollAnimation from "./components/ScrollAnimation";
import ViewBaseAnimations from "./components/ViewBaseAnimations";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      <ViewBaseAnimations />
      {/* <ScrollAnimation /> */}

      {/* <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence> */}
    </>
  );
}

export default App;
