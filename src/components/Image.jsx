import React, { useState, useEffect } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Spinner from "./Spinner";
import "./css/style.css";

export default function Image(props) {
  const { showBullet, showIndex, showThumb, playButton, fullScreen, showNav } =
    props;
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loading, setLoading] = useState(true);
  const [pos, setPos] = useState("bottom");
  const [error, setError] = useState(false);
  const [imageOrientaion, setImageOrientaion] = useState("landscape");

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
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
      if (data.photos.length === 0) {
        setError(true);
      } else {
        setPhotos(
          data.photos.map((photo) => ({
            original:
              imageOrientaion === "landscape"
                ? photo.src.landscape
                : photo.src.portrait,
            thumbnail:
              imageOrientaion === "landscape"
                ? photo.src.landscape
                : photo.src.portrait,
            description: capitalize(photo.photographer),
          }))
        );
        setError(false);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchImages();
    }, 3000);
    return () => clearTimeout(timer);
  }, [search, imageOrientaion]);

  const handleImageOrientation = (orientation) => {
    setImageOrientaion(orientation);
  };

  const handlePos = (newPos) => {
    setPos(newPos);
  };


  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Type here to search images..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => setSearch(e.target.value)}
          style={{ borderRadius: "20px 0 0 20px" }}
          list="datalistOptions"
        />
        <datalist id="datalistOptions">
          <option value="Car" />
          <option value="Mountain" />
          <option value="Sky" />
          <option value="Rainbow" />
          <option value="Birds" />
        </datalist>
      </div>
      {loading && <Spinner />}
      {error && (
        <div className="error text-danger ">Images not Found. Try again!</div>
      )}
      {!loading && !error && (
        <Gallery
          items={photos}
          showIndex={showIndex}
          showBullets={showBullet}
          showThumbnails={showThumb}
          showFullscreenButton={fullScreen}
          showPlayButton={playButton}
          showNav={showNav}
          thumbnailPosition={pos}
          onThumbnailPositionChanged={handlePos}
        />
      )}
      <div id="thumbnailBox">
      <div className="thumbnail">
        <label>
          Thumbnail Position:
          <select value={pos} onChange={(e) => handlePos(e.target.value)} className="from-select">
            <option value="bottom">Bottom</option>
            <option value="top">Top</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
      </div>

      <div className="thumbnail">
        <label>
          Image Orientaion:
          <select
            value={imageOrientaion}
            onChange={(e) => handleImageOrientation(e.target.value)}
          >
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
          </select>
        </label>
      </div>
      </div>
      
    </div>
  );
}
