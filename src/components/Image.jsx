import React, { useState, useEffect } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Image() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("nature");
  
  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}&per_page=20`,
        {
          headers: {
            Authorization:
              "XyZhRCpsh7fqoyR9EeLl1clSXTv60dVkvk6uWrSJVAPOqnf6Pa9vc4ob",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      console.log(data);
      setPhotos(
        data.photos.map((photo) => ({
          original: photo.src.landscape,
          thumbnail: photo.src.landscape,
          description: photo.photographer,
        }))
      );
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchImages();
    }, 3000);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/*<input
        type="search"
        style={{ marginBottom: "10px", padding: "10px 10px 10px 10px" }}
        onChange={(e) => setSearch(e.target.value)}
  />*/}
      <Gallery items={photos} showIndex="true" showBullets="true"/>
    </div>
  );
}
