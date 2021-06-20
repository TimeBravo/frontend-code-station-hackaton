import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './home.module.scss';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StageCardContainer } from '../components/StageCardContainer';
import { StageCard } from '../components/StageCard';
import {
  NextStageButton,
  PreviousStageButton,
} from '../components/StageButton';

export default function Home(): JSX.Element {
  const resposta = {
    members: [
      {
        status: 'COMPLETED',
        name: 'Alexandre Marinho',
        pictures_url: ['https://avatars.githubusercontent.com/u/41836961?v=4'],
        description: 'Responsável pelo o desenvolvimento do\nBackend em nodejs',
      },
      {
        status: 'COMPLETED',
        name: 'Thomas Vieira',
        pictures_url: ['https://avatars.githubusercontent.com/u/45882203?v=4'],
        description:
          'Responsável pelo o desenvolvimento do\nFrontend Web em Nextjs',
      },
      {
        status: 'COMPLETED',
        name: 'Victor Novais',
        pictures_url: ['https://avatars.githubusercontent.com/u/32309553?v=4'],
        description:
          'Responsável pelo o desenvolvimento do\nMobile em react native',
      },
      {
        status: 'COMPLETED',
        name: 'Weverton Cintra',
        pictures_url: ['https://avatars.githubusercontent.com/u/33919003?v=4'],
        description:
          'Responsável pelo o desenvolvimento do\nFrontend Web em Nextjs e axiliou no Backend',
      },
    ],
  };
  const { members } = resposta;
  const actualStage = members[members.length - 1];
  const [actualStageIndex, setActualStageIndex] = useState(members.length - 1);
  const [actualStageState, setActualStageState] = useState(actualStage);

  useEffect(() => {
    setActualStageState(members[actualStageIndex]);
  }, [actualStageIndex, members]);

  const handlePreviousStage = (): void => {
    if (actualStageIndex > 0) {
      setActualStageIndex(actualStageIndex - 1);
    }
  };

  const handleNextStage = (): void => {
    if (actualStageIndex < members.length - 1) {
      setActualStageIndex(actualStageIndex + 1);
    }
  };

  const spacer = {
    width: '14vh',
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>StageView - TimeBravo</title>
      </Head>
      <Header />
      <main className={styles.main}>
        {actualStageState && (
          <StageCardContainer>
            <StageCard
              status={actualStageState.status}
              name={actualStageState.name}
              photos={actualStageState.pictures_url}
              stageDescription={actualStageState.description}
            />
          </StageCardContainer>
        )}

        <nav className={styles.stageButtonsContainer}>
          {actualStageIndex > 0 ? (
            <PreviousStageButton onClick={handlePreviousStage} />
          ) : (
            <div style={spacer} />
          )}
          {actualStageIndex < members.length - 1 ? (
            <NextStageButton onClick={handleNextStage} />
          ) : (
            <div style={spacer} />
          )}
        </nav>
      </main>
      <Footer />
    </div>
  );
}
