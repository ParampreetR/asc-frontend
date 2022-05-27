import SimpleImageSlider from "react-simple-image-slider";

export function ImageSlider() {
  const images = [
    { url: "/img1.jpg" },
    { url: "/img2.jpg" },
    { url: "/img3.jpg" },
    { url: "/img4.jpg" },
    { url: "/img5.jpg" },
  ];

  return (
    <div className="bg-image bg-transparent section">
      <SimpleImageSlider
        width={"100vw"}
        height={"66vw"}
        images={images}
        showNavs={true}
        autoPlay={true}
        bgColor={"transparent"}
      />
    </div>
  );
}
