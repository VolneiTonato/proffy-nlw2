import React from 'react';
import { NextPage, GetStaticProps } from 'next'
import { Container } from './styles';

import whatsappIcon from '@static/images/icons/whatsapp.svg';

interface Teacher {
  user: {
    name: string
    bio: string
    avatar: string
    whatsapp: string
  }
  subject: string
  cost: number
}

interface TeacherItemProps {
  teacher: Teacher
}




const TeacherItem: NextPage<TeacherItemProps> = ({ teacher }) => {

  console.log('alooooooo')

  return (
    <Container>
      <header>
        <img
          src={teacher.user.avatar}
          alt={teacher.user.name}
        />
        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.user.bio}</p>

      <footer>
        <p>
          Preço/hora
        <strong>{teacher.cost}</strong>
        </p>

        <a href={`https://wa.me/${teacher.user.whatsapp}`}>
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
      </a>

      </footer>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
//const { data } = await api.get('/classes/all');
  console.log(context)

  return {
    props: { teacher: context },
    revalidate: 1
  };
};


export default TeacherItem;
