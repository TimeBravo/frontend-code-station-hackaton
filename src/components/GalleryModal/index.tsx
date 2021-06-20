import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

interface GalleryProps {
  galleryIsOpen: boolean;
  setGalleryIsOpen: (arg0: boolean) => void;
  images: string[];
}

export function GalleryModal(props: GalleryProps): JSX.Element {
  const { galleryIsOpen, setGalleryIsOpen, images } = props;
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      {galleryIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setGalleryIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
