import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import api from '@services/api';
import Layout from '@components/Layout';

import logoImg from '@static/images/logo.svg';
import landingImg from '@static/images/landing.svg';
import studyIcon from '@static/images/icons/study.svg';
import giveClassesIcon from '@static/images/icons/give-classes.svg';
import purpleHeartIcon from '@static/images/icons/purple-heart.svg';

import {
  PageLanding,
  ButtonContainer,
  LinkButton,
  PageLandingContent,
  LogoContainer,
  TotalConnection,
  HeroImage,
} from '@styles-page/landing';

interface LandingProps {
  totalConnection : number
}

const Landing: React.FC<LandingProps> = (props) => {
  const { totalConnection } = props;

  return (
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
            {totalConnection || '0'}
            {' '}
            conexões já realizadas
            {' '}
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </TotalConnection>

        </PageLandingContent>
      </PageLanding>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/connections');

  return {
    props: { totalConnection: data?.totalConnection },
    revalidate: true,
  };
};

export default Landing;
