import React, { useState, useEffect } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Spinner from "./Spinner";
import "./Images.css"

export default function Image() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loading, setLoading] = useState(true);
  const [pos, setPos] = useState('bottom');

  const handlePos = newPos => {
    setPos(newPos);
  };
  const fetchImages = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
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
          placeholder="Type here to search images..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => setSearch(e.target.value)}
          style={{ borderRadius: "20px 0 0 20px" }}
        />
      </div>
      {loading && <Spinner />}
      {!loading && (
        <Gallery
          items={photos}
          showIndex="true"
          showBullets="true"
          thumbnailPosition={pos}
          onThumbnailPositionChanged={handlePos}
        />
      )}
      <div className="thumbnail">
      <label>
          Thumbnail Position:
          <select
            value={pos}
            onChange={e => handlePos(e.target.value)}
          >
            <option value="bottom">Bottom</option>
            <option value="top">Top</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
        </div>
    </div>
  );
}
