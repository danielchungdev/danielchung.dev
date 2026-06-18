import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface HeroGalleryProps {
  images: GalleryImage[];
}

const HeroGallery = ({ images }: HeroGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroGallery; 