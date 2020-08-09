import React from 'react';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem from '../../components/Pages/TeacherItem';

import {
  PageTeacherList,
  SeachTeachers,
  TeacherMain,

} from './styles';

const TeacherList = () => (
  <Layout title="Teachers">
    <PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <SeachTeachers>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Desenvolvimento', label: 'Desenvolvimento' },
              { value: 'PHP', label: 'PHP' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feria' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input type="time" name="time" label="Hora" />

        </SeachTeachers>
      </PageHeader>

      <TeacherMain>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherMain>

    </PageTeacherList>
  </Layout>
);

export default TeacherList;
