import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import Layout from '../../components/Layout';

import {
  PageLanding,
  ButtonContainer,
  LinkButton,
  PageLandingContent,
  LogoContainer,
  TotalConnection,
  HeroImage,
} from './styles';

const logoImg = '/images/logo.svg';
const landingImg = '/images/landing.svg';
const studyIcon = '/images/icons/study.svg';
const giveClassesIcon = '/images/icons/give-classes.svg';
const purpleHeartIcon = '/images/icons/purple-heart.svg';

const Landing: React.FC = () => (
  <Layout title="Inicio Teste">
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img alt="Proffy" src={logoImg} />
          <h2>Sua plataforma de estudo online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de estudos" />

        <ButtonContainer>
          <Link href="/study">
            <LinkButton typeText="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </LinkButton>
          </Link>

          <Link href="give-classes">
            <LinkButton typeText="giveClasses">
              <img src={giveClassesIcon} alt="Dar Aulas" />
              Dar aulas
            </LinkButton>
          </Link>
        </ButtonContainer>

        <TotalConnection>
          Total de
          {' '}
          carregando
          {' '}
          conexões já realizadas
          {' '}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnection>

      </PageLandingContent>
    </PageLanding>
  </Layout>
);
export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await api.get('/connections');
  const data = await fetch('http://localhost/connections');

  console.log(data);

  return {
    props: { totalConnection: data },
  };
};

export default Landing;
