import React, { useCallback, useEffect, memo, useState, FormEvent } from 'react';
import PageHeader from '@components/PageHeader';
import Layout from '@components/Layout';
import Input from '@components/Input';
import Select from '@components/Select';
import TeacherItem from '@components/Pages/TeacherItem';
import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import api from '@services/api';
import DateUtils from '@utils/date-utils';


import {
  PageTeacherList,
  SeachTeachers,
  TeacherMain

} from '@styles-page/study';


interface ClasseProps {
  id: string
  subject: string
}


interface TeacherListProps {
  classes: ClasseProps[]
}
/*
const TeacherItem = dynamic(() => 
  import('@components/Pages/TeacherItem')
)*/



const TeacherList: NextPage<TeacherListProps> = ({ classes }) => {

  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])
  const router = useRouter()


  if (!classes)
    return <h1>Sem Matérias no momento!</h1>


  const optionsSubject = classes.map(classe => {
    return { value: classe.subject, label: classe.subject }
  })



  const handleSearchTeacher = async (e: FormEvent) => {
    e.preventDefault()

    try {

      const { data } = await api.get('/classes', { params: { subject, time, week_day: weekDay } })

      setTeachers(data)
      /*
      router.push({
        pathname: '/study/subject',
        query: { subject: subject, time: time, week_day: weekDay },

      })*/

    } catch (err) {
      alert(String(err))
    }


  }


  return (
    <Layout title="Teachers">
      <PageTeacherList className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <SeachTeachers onSubmit={handleSearchTeacher}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={optionsSubject}
            />

            <Select
              name="week_day"
              label="Dia da semana"
              value={weekDay}
              onChange={e => setWeekDay(e.target.value)}
              options={DateUtils.diasSemana()}
            />

            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={e => setTime(e.target.value)}
            />

            <button type="submit">
              Buscar
            </button>

          </SeachTeachers>
        </PageHeader>

        <TeacherMain>
          {teachers.map(row => (
            <TeacherItem key={row.id} teacher={row} />
          ))}

        </TeacherMain>

      </PageTeacherList>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/classes/all');

  return {
    props: { classes: data },
    revalidate: 1
  };
};


export default TeacherList;
