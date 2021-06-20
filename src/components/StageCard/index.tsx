import { useState } from 'react';
import { GalleryModal } from '../GalleryModal';
import styles from './styles.module.scss';

interface CardProps {
  step: 'previous' | 'actual' | 'next';
  status: string;
  id: string;
  name: string;
  photos: string[] | null;
  stageDescription: string;
}

export function StageCard(props: CardProps): JSX.Element {
  const { step, name, photos, stageDescription } = props;

  const [galleryIsOpen, setGalleryIsOpen] = useState(false);
  const images = photos !== null ? photos : ['/semFoto.jpg'];
  if (step === 'previous') {
    return (
      <div className={styles.previousCard}>
        <h2>{name}</h2>

        <p>
          Nesta etapa:
          {'\n\n'}
          {stageDescription}
        </p>
        <div>
          {photos !== null ? (
            <img src={photos[0]} alt="Foto" />
          ) : (
            <img src="/semFoto.jpg" alt="Sem Foto" />
          )}
        </div>
      </div>
    );
  }
  if (step === 'next') {
    return (
      <div className={styles.nextCard}>
        <h2>{name}</h2>

        <p>
          Nesta etapa:
          {'\n\n'}
          {stageDescription}
        </p>
        <div>
          {photos !== null ? (
            <img src={photos[0]} alt="Foto" />
          ) : (
            <img src="/semFoto.jpg" alt="Sem Foto" />
          )}
        </div>
      </div>
    );
  }
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
