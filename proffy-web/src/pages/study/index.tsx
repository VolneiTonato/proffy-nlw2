import React, {
    useCallback,
    useState,
    useRef,
    useEffect,
    useContext,
} from 'react';
import PageHeader from '@components/PageHeader';
import Layout from '@components/Layout';
import Input from '@components/ElementsForm/Inputs/Input';
import Select from '@components/ElementsForm/Select';
import TeacherItem from '@components/Pages/TeacherItem';
import { NextPage, GetStaticProps } from 'next';
import api from '@services/api';
import dateUtils from '@utils/date';
import * as Yup from 'yup';
import formUtils from '@utils/form';
import { FormHandles } from '@unform/core';
import LoaderSpin from '@components/Loaders/Loader';
import { useNProgress } from '@hooks/useNProgress';
import { useToast } from '@context/ToastContext';

import {
    PageTeacherList,
    SeachTeachers,
    TeacherMain,
    TeacerMainContainerMessage,
} from '@styles-page/study';

interface ClasseProps {
    id: string;
    subject: string;
}

interface StateProps {
    subject: string;
    week_day: string;
    time: string;
}

interface TeacherListProps {
    classes: ClasseProps[];
}

const TeacherList: NextPage<TeacherListProps> = ({ classes }) => {
    const { startProgress, stopProgress } = useNProgress();
    const [isVisibled, setIsVisibled] = useState(false);
    const [messageIsVisibled, setMessageIsVisibled] = useState(false);
    const [state, setState] = useState<StateProps>({
        subject: '',
        week_day: '',
        time: '',
    });
    const [teachers, setTeachers] = useState([]);
    const { addToast, removeToast } = useToast();

    const formRef = useRef<FormHandles>(null);

    const handleOnChange = useCallback(
        (e: any) => {
            const name = e.target?.name;
            const value = e.target?.value;

            setState({ ...state, [name]: value });
        },
        [state],
    );

    const handleSearchTeacher = useCallback(async () => {
        try {
            formRef.current?.setErrors([]);
            const schema = Yup.object().shape({
                subject: Yup.string().required('Matéria obrigatória'),
                time: Yup.string().required('Hora obrigatória'),
                week_day: Yup.string()
                    .required('Dia da semana obrigatória')
                    .matches(/[0-6]/, 'Dia da semana inválido'),
            });

            await schema.validate(state, {
                abortEarly: false,
            });

            setIsVisibled(true);

            startProgress();

            setMessageIsVisibled(false);

            const { data } = await api.get('/classes', {
                params: { ...state, week_day: state.week_day },
            });

            setTeachers(data);

            if (!data?.length) setMessageIsVisibled(true);
        } catch (err) {
            const errors = formUtils.yupValidationErros(err);
            formRef.current?.setErrors(errors);
            addToast({
                title: 'Oops, Ocorreu algo de errado.',
                description: 'Informe todos os campos para a pesquisa.',
                type: 'error',
            });
        } finally {
            setIsVisibled(false);
            stopProgress();
        }
    }, [state, startProgress, stopProgress]);

    let optionsSubject = [];

    if (Array.isArray(classes))
        optionsSubject = classes.map(classe => {
            return { value: classe.subject, label: classe.subject };
        });

    return (
        <Layout title="Teachers">
            <PageTeacherList className="container">
                <PageHeader title="Estes são os proffys disponíveis.">
                    <SeachTeachers ref={formRef} onSubmit={handleSearchTeacher}>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={state.subject}
                            onChange={handleOnChange}
                            options={optionsSubject}
                        />

                        <Select
                            name="week_day"
                            label="Dia da semana"
                            value={state.week_day}
                            onChange={handleOnChange}
                            options={dateUtils.diasDaSemana()}
                        />

                        <Input
                            type="time"
                            name="time"
                            label="Hora"
                            value={state.time}
                            onChange={handleOnChange}
                        />

                        <button type="submit">Buscar</button>
                    </SeachTeachers>
                </PageHeader>

                <TeacherMain>
                    <>
                        <LoaderSpin isVisibled={isVisibled} />
                        {teachers.map(row => (
                            <TeacherItem key={row.id} teacher={row} />
                        ))}
                        <>
                            {messageIsVisibled &&
                                !isVisibled &&
                                teachers?.length === 0 && (
                                    <TeacerMainContainerMessage>
                                        <p>
                                            Não há horário disponível para os
                                            filtros selecionados
                                        </p>
                                    </TeacerMainContainerMessage>
                                )}
                        </>
                    </>
                </TeacherMain>
            </PageTeacherList>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/classes/all');

    return {
        props: { classes: data },
        revalidate: 1,
    };
};

export default TeacherList;
