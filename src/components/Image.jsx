import React, { useState, useEffect } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { createClient } from "pexels";
// import images from "./imageData"

export default function Image() {

  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("nature");

  const API_KEY = "huDDlpIgOThBpkRYMwQ9vCzz2zoe4fFmiPmuzx1ANHdRznjzUqP92btg";
  const client = createClient(API_KEY);

  const fetchPhotos = async () => {
    try {
      const response = await client.photos.search({
        query: search,
        per_page: 10,
      });
      setPhotos(
        response.photos.map((photo) => ({
          original: photo.src.landscape,
          thumbnail: photo.src.landscape,
          description: photo.photographer,
        }))
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };


  useEffect(() => {
    let timer = setTimeout(() => {
      fetchPhotos();
    }, 3000);
    return () => clearTimeout(timer);
    
  }, [search]);

  return (
    <div>
      <input
        type="search"
        style={{ marginBottom: "10px", padding: "10px 10px 10px 10px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Gallery items={photos} />
    </div>
  );
}
