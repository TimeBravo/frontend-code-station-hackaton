import { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';
import { GalleryModal } from '../GalleryModal';

import styles from './styles.module.scss';

interface CardProps {
  status: string;
  name: string;
  photos: string[] | null;
  stageDescription: string;
}

export function StageCard(props: CardProps): JSX.Element {
  const { name, status, photos, stageDescription } = props;
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);
  let images;
  if (photos !== null) {
    images = photos;
  } else {
    images = ['/semFoto.jpg'];
  }

  if (images[0] === null || images[0] === undefined) images = ['/semFoto.jpg'];

  return (
    <div className={styles.actualCard}>
      <h2>
        {name} - {status !== 'WAITING' ? 'Concluída' : 'Etapa Futura'}
      </h2>

      <p>
        Nesta etapa:
        {'\n\n'}
        {stageDescription}
      </p>
      <button onClick={() => setGalleryIsOpen(true)} type="button">
        <div>
          <img src={images[0]} alt="Foto" />
          <span>
            <FiZoomIn />
          </span>
        </div>
      </button>
      <GalleryModal
        galleryIsOpen={galleryIsOpen}
        setGalleryIsOpen={setGalleryIsOpen}
        images={images}
      />
    </div>
  );
}
