import React from 'react';

import { Container } from './styles';

const whatsappIcon = '/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => (
  <Container>
    <header>
      <img
        src="https://avatars0.githubusercontent.com/u/2885444?s=460&u=ff22fad3d95f1e4b0024a82801593ba245d8227f&v=4"
        alt="Volnei Tonato"
      />
      <div>
        <strong>Volnei Tonato</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de
      experiências.
      Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>

    </footer>
  </Container>
);

export default TeacherItem;
