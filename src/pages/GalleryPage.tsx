// src/pages/GalleryPage.js
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Card from '../component/Card';
import Modal from '../component/Modal';

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    '/p1.jpg',
    '/p2.jpg',
    '/p1.jpg',
    '/p2.jpg',
    '/p1.jpg',
    '/p2.jpg',
    '/p1.jpg',
    '/p2.jpg',
    // Add more photos as needed
  ];

  const breakpointColumnsObj = {
    default: 2,
    768: 2,
    480: 1,
  };

  return (
    <Card>
      <div className='w-full h-full overflow-y-auto overflow-x-hidden'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='flex w-auto gap-4'
          columnClassName='flex flex-col gap-4'
        >
          {images.map((image, index) => (
            <div key={index}
              className='cursor-pointer overflow-hidden rounded-2xl shadow transition-transform duration-300'
              onClick={() => setSelectedImage(image)}
            >
              <img src={`/invitation/${image}`} className='w-full object-cover' />
            </div>
          ))}

          {
            selectedImage && (
              <Modal
                onClose={() => setSelectedImage('')}
              >
                <img src={`/invitation/${selectedImage}`} alt="modal" className="max-h-[90vh] max-w-full object-contain rounded-xl" />
              </Modal>
            )
          }
        </Masonry>
      </div>
    </Card >
  );
};

export default GalleryPage;
