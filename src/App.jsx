import React, { useState } from "react";
import "./App.css";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  const [showBullet, setShowBullet] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const [playButton, setPlayButton] = useState(true);
  const [showIndex, setShowIndex] = useState(false);
  const [showThumb, setShowThumb] = useState(true);
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      {/* {<h1 className='text-center bg-info-subtle'>Image Gallery</h1>} */}
      <Navbar
        showBullet={showBullet}
        setShowBullet={setShowBullet}
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        playButton={playButton}
        setPlayButton={setPlayButton}
        showIndex={showIndex}
        setShowIndex={setShowIndex}
        showThumb={showThumb}
        setShowThumb={setShowThumb}
        showNav={showNav}
        setShowNav={setShowNav}
      />

      <Image
        showBullet={showBullet}
        fullScreen={fullScreen}
        playButton={playButton}
        showIndex={showIndex}
        showThumb={showThumb}
        showNav={showNav}
      />
      <Footer/>
      
    </>
  );
}

export default App;
