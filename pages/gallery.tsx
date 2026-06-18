import HeroGallery from '../components/HeroGallery';

const GalleryPage = () => {
  const images = [
    {
      src: '/images/gallery/image1.jpg',
      alt: 'Gallery Image 1'
    },
    {
      src: '/images/gallery/image2.jpg',
      alt: 'Gallery Image 2'
    },
    {
      src: '/images/gallery/image3.jpg',
      alt: 'Gallery Image 3'
    },
    {
      src: '/images/gallery/image4.jpg',
      alt: 'Gallery Image 4'
    },
    {
      src: '/images/gallery/image5.jpg',
      alt: 'Gallery Image 5'
    },
    {
      src: '/images/gallery/image6.jpg',
      alt: 'Gallery Image 6'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <HeroGallery images={images} />
      {/* Add more content below the gallery */}
      <div className="h-screen bg-white p-8">
        <h1 className="text-4xl font-bold">Scroll Down</h1>
        <p className="mt-4">The gallery above will animate as you scroll</p>
      </div>
    </div>
  );
};

export default GalleryPage; 