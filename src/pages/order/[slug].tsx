import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';
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
      stageDescription: string;
      photos: string[] | null;
    }
  ];
};

interface OrderProps {
  order: Order;
}

export default function Order({ order }: OrderProps) {
  const completedStages = order.stages.filter(stage => {
    if (stage.status === 'COMPLETED') return stage;
    return null;
  });
  const actualStage = completedStages[completedStages.length - 1];
  const [actualStageIndex, setActualStageIndex] = useState(
    completedStages.length - 1
  );
  const [actualStageState, setActualStageState] = useState(actualStage);

  useEffect(() => {
    setActualStageState(order.stages[actualStageIndex]);
  }, [actualStageIndex, order.stages]);

  const handlePreviousStage = (): void => {
    if (actualStageIndex > 0) {
      setActualStageIndex(actualStageIndex - 1);
    }
  };

  const handleNextStage = (): void => {
    if (actualStageIndex < order.stages.length - 1) {
      setActualStageIndex(actualStageIndex + 1);
    }
  };

  const spacer = {
    width: '14vh',
  };

  return (
    <>
      <Head>
        <title>StageView - TimeBravo</title>
      </Head>

      <main className={styles.main}>
        {actualStageState && (
          <StageCardContainer>
            <StageCard
              status={actualStageState.status}
              name={actualStageState.name}
              photos={actualStageState.photos}
              stageDescription={actualStageState.stageDescription}
            />
          </StageCardContainer>
        )}

        <nav className={styles.stageButtonsContainer}>
          {actualStageIndex > 0 ? (
            <PreviousStageButton onClick={handlePreviousStage} />
          ) : (
            <div style={spacer} />
          )}
          {actualStageIndex < order.stages.length - 1 ? (
            <NextStageButton onClick={handleNextStage} />
          ) : (
            <div style={spacer} />
          )}
        </nav>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  console.log(slug);

  // const signinToken = await api.post('authenticate', {
  //  email: 'alexandre.masj@gmail.com',
  //  password: 'eganmuw6',
  // });

  // const response = await api.get(`order/${slug}`, {
  // headers: { Authorization: `Bearer ${signinToken}` },
  // });

  const response = await api.get(`order/${slug}`);

  console.log(response);

  const order = {
    slug,
    productName: response.data.productName,
    clientName: response.data.clientName,
    clientEmail: response.data.clientEmail,
    stages: [
      {
        status: response.data.status,
        name: response.data.name,
        description: response.data.description,
        pictures_url: response.data.pictures_url,
      },
    ],
  };

  return {
    props: {
      order,
    },
  };
};
