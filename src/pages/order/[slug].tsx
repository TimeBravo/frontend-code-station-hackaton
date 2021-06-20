import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { StageCardContainer } from '../../components/StageCardContainer';
import { StageCard } from '../../components/StageCard';
import {
  NextStageButton,
  PreviousStageButton,
} from '../../components/StageButton';
import styles from './home.module.scss';

type Order = {
  slug: string;
  productName: string;
  clientName: string;
  clientEmail: string;
  stages: [
    {
      status: string;
      name: string;
      description: string;
      pictures_url: string[] | null;
    }
  ];
};

interface OrderProps {
  order: Order;
}

export default function Order({ order }: OrderProps): JSX.Element {
  const { stages } = order;
  const completedStages = stages.filter(stage => {
    if (stage.status === 'FINISHED' || stage.status === 'STARTED') return stage;
    return null;
  });
  const actualStage = completedStages[completedStages.length - 1];
  const [actualStageIndex, setActualStageIndex] = useState(
    completedStages.length - 1
  );
  const [actualStageState, setActualStageState] = useState(actualStage);

  useEffect(() => {
    setActualStageState(stages[actualStageIndex]);
  }, [actualStageIndex, stages]);

  const handlePreviousStage = (): void => {
    if (actualStageIndex > 0) {
      setActualStageIndex(actualStageIndex - 1);
    }
  };

  const handleNextStage = (): void => {
    if (actualStageIndex < stages.length - 1) {
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
          {actualStageIndex < stages.length - 1 ? (
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`order/${slug}`);

  const order = {
    slug,
    productName: response.data.productName,
    clientName: response.data.clientName,
    clientEmail: response.data.clientEmail,
    stages: response.data.stages,
  };

  return {
    props: {
      order,
    },
  };
};
