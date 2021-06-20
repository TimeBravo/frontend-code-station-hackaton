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
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const resposta = {
    id: '1df461ae-2aa3-41f6-9276-c7d2b74d9553',
    clientName: 'Roberto Assis da Silva',
    clientEmail: null,
    clientPhone: '+5517992601670',
    productName: 'Esteira de seleção UHK-9000',
    isCompleted: false,
    createdAt: '2021-06-17T03:19:00.000Z',
    updatedAt: '2021-06-17T03:19:00.000Z',
    stages: [
      {
        status: 'COMPLETED',
        id: '060873c5-6ee5-4d09-8c61-bb74abcf7a03',
        name: 'Pedido Implantado',
        photos: [
          'https://wfa.com.br/wp-content/uploads/2018/06/comprar-equipamento-industrial-wfa.jpg',
          'https://wfa.com.br/wp-content/uploads/2018/08/comprar-equipamento-industrial-wfa.jpg',
          'https://blog.kalatec.com.br/wp-content/uploads/2021/01/equipamentos-industriais.jpg',
        ],
        stageDescription:
          'Implantação do pedido em nosso ERP\nCompras de materiais\nAjustes do projeto\nAjustes do projeto\nAjustes do projeto\nAjustes do projeto',
      },
      {
        status: 'WAITING',
        id: '060873c5-6ee5-4d09-8c61-bb74abcf7a03',
        name: 'Corte e Dobra',
        photos: [
          'https://wfa.com.br/wp-content/uploads/2018/08/comprar-equipamento-industrial-wfa.jpg',
          'https://blog.kalatec.com.br/wp-content/uploads/2021/01/equipamentos-industriais.jpg',
        ],
        stageDescription:
          'Agrupamento de todas as peças cortadas e dobradas para montagem',
      },
      {
        status: 'WAITING',
        id: '2d40819f-d58a-45e7-b095-52ff8b25f2d7',
        name: 'Pintura',
        photos: [
          'https://blog.kalatec.com.br/wp-content/uploads/2021/01/equipamentos-industriais.jpg',
        ],
        stageDescription:
          'Agrupamento de todas as peças cortadas e dobradas para montagem',
      },
      {
        status: 'WAITING',
        id: '67a86c70-4acc-450f-8028-85eeb2e18a28',
        name: 'Montagem',
        photos: null,
        stageDescription:
          'Agrupamento de todas as peças cortadas e dobradas para montagem',
      },
      {
        status: 'WAITING',
        id: '87373156-ed5e-41a9-a1db-5f416086e88d',
        name: 'Polimento',
        photos: null,
        stageDescription:
          'Agrupamento de todas as peças cortadas e dobradas para montagem',
      },
      {
        status: 'WAITING',
        id: 'e2167722-680d-4dac-83d1-8511efdb6ed5',
        name: 'Soldagem',
        photos: null,
        stageDescription:
          'Agrupamento de todas as peças cortadas e dobradas para montagem',
      },
      {
        status: 'WAITING',
        id: '00c61ca5-7998-447f-adc8-92aada2730e0',
        name: 'Expedição',
        photos: null,
        stageDescription:
          'Agrupamento de todas as peças cortadas e dobradas para montagem',
      },
    ],
  };
  const { stages } = resposta;
  const completedStages = stages.filter(stage => {
    if (stage.status === 'COMPLETED') return stage;
    return null;
  });
  const actualStage = completedStages[completedStages.length - 1];
  const [actualStageIndex, setActualStageIndex] = useState(
    completedStages.length - 1
  );
  const [actualStageState, setActualStageState] = useState(actualStage);
  // console.log('actualStage', actualStage);
  // const futureStages = stages.filter(stage => {
  //  if (stage.status === 'WAITING') return stage;
  //  return null;
  // });
  // console.log('futureStages', futureStages);

  useEffect(() => {
    setActualStageState(stages[actualStageIndex]);
  }, [actualStageIndex]);

  const handlePreviousStage = () => {
    if (actualStageIndex > 0) {
      setActualStageIndex(actualStageIndex - 1);
    }
  };

  const handleNextStage = () => {
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
        <title>StageView - TimeBravo</title>{' '}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {actualStageState && (
          <StageCardContainer>
            <StageCard
              step="actual"
              status={actualStageState.status}
              id={actualStageState.id}
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
