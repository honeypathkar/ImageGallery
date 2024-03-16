import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Image() {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1010/1000/600/",
      thumbnail: "https://picsum.photos/id/1010/250/150/",
    },
    {
      original: "https://picsum.photos/id/1050/1000/600/",
      thumbnail: "https://picsum.photos/id/1050/250/150/",
    },
    {
      original: "https://picsum.photos/id/1025/1000/600/",
      thumbnail: "https://picsum.photos/id/1025/250/150/",
    },
    {
      original: "https://picsum.photos/id/1000/1000/600/",
      thumbnail: "https://picsum.photos/id/1000/250/150/",
    },
    {
      original: "https://picsum.photos/id/1002/1000/600/",
      thumbnail: "https://picsum.photos/id/1002/250/150/",
    },
    {
      original: "https://picsum.photos/id/1020/1000/600/",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "https://picsum.photos/id/1006/1000/600/",
      thumbnail: "https://picsum.photos/id/1006/250/150/",
    },
  ];

  return (
    <div>
      <ImageGallery items={images}/>
    </div>
  );
}
