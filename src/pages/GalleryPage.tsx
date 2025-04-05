// src/pages/GalleryPage.js
import Card from '../component/Card';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';

function GalleryPage() {
  const images = [
    p1,
    p2,
    // Add more photos as needed
  ];

  return (
    <Card>
      <div className="w-full h-full bg-white overflow-hidden">
        <div className="w-full h-full overflow-x-scroll snap-x snap-mandatory">
          {images.map((image, index) => (
            <div key={index} className={`w-full h-full snap-start rounded-lg bg-[url(${image})]`}></div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default GalleryPage;
