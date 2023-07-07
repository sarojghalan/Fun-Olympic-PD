import Title from "../../Components/Title/Title";
import {
  galleryEight,
  galleryOne,
  galleryFive,
  galleryFour,
  gallerySix,
  galleryThree,
  galleryTwo,
  gallerySeven,
} from "../../assets";

function Gallery() {
  const imageArr = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
    gallerySeven,
    galleryEight,
  ];
  return (
    <div className="overall__wrapper">
      <div className="gallery__wrapper">
        <div className="container">
          <Title title="Gallery" />
          <div className="gallery__content">
            {imageArr.map((item) => (
              <img src={item} alt="galleryImage" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
