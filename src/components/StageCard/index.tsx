import { useState } from 'react';
import { GalleryModal } from '../GalleryModal';
import styles from './styles.module.scss';

interface CardProps {
  status: string;
  name: string;
  photos: string[] | null;
  stageDescription: string;
}

export function StageCard(props: CardProps): JSX.Element {
  const { name, photos, stageDescription } = props;
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);
  const images = photos !== null ? photos : ['/semFoto.jpg'];

  return (
    <div className={styles.actualCard}>
      <h2>{name}</h2>

      <p>
        Nesta etapa:
        {'\n\n'}
        {stageDescription}
      </p>
      <button onClick={() => setGalleryIsOpen(true)} type="button">
        <div>
          {photos !== null ? (
            <img src={photos[0]} alt="Foto" />
          ) : (
            <img src="/semFoto.jpg" alt="Sem Foto" />
          )}
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
