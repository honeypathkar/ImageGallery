import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import images from "./imageData"

export default function Image() {

  return (
    <div>
      <Gallery items={images}/>
    </div>
  );
}