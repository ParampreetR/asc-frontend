import SimpleImageSlider from "react-simple-image-slider";

export function ImageSlider() {
  const images = [
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
  ];

  return (
    <div className="bg-image section">
      <SimpleImageSlider
        width={"100vw"}
        height={"66vw"}
        images={images}
        showNavs={false}
        autoPlay={true}
      />
    </div>
  );
}
