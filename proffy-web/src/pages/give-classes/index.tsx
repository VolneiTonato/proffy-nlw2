import React, { useState, useCallback, ChangeEvent, useRef } from 'react';
import { GetStaticProps } from 'next';
import api from '@services/api';
import PageHeader from '@components/PageHeader';
import Input from '@components/ElementsForm/Inputs/Input';
import InputNumber from '@components/ElementsForm/Inputs/InputNumber';
import Textarea from '@components/ElementsForm/Textarea';
import InputMask from '@components/ElementsForm/Inputs/InputMask';
import * as Yup from 'yup';
import Select from '@components/ElementsForm/Select';
import { PageTeacherForm, Main, ScheduleItem } from '@styles-page/give-classes';
import dateUtils from '@utils/date';
import warningIcon from '@static/images/icons/warning.svg';
import Layout from '@components/Layout';
import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/web';
import formUtils from '@utils/form';
import { v4 as uuid } from 'uuid';
import numberUtils from '@utils/number';
import { useToast } from '@context/ToastContext';

interface Ischedule {
    week_day: string;
    from: string;
    to: string;
}

interface IDataForm {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
}

interface SubjectProps {
    id: string;
    subject: string;
}

interface TeacherFormProps {
    subjects: SubjectProps[];
}

const TeacherForm: React.FC<TeacherFormProps> = ({ subjects }) => {
    const { addToast } = useToast();
    const [scheduleItems, setscheduleItems] = useState<Ischedule[]>([
        { from: '', to: '', week_day: '' },
    ]);

    const formRef = useRef<FormHandles>(null);

    const [data, setData] = useState<IDataForm>({
        avatar: '',
        bio: '',
        cost: 0.0,
        subject: '',
        name: '',
        whatsapp: '',
    });

    const addscheduleItemHandle = useCallback(() => {
        setscheduleItems([
            ...scheduleItems,
            { from: '', to: '', week_day: '' },
        ]);
    }, [scheduleItems]);

    const createHandle = useCallback(async () => {
        try {
            formRef.current?.setErrors([]);

            const schemaGeral = Yup.object().shape({
                name: Yup.string().required('Matéria obrigatório'),
                avatar: Yup.string()
                    .required('Avatar obrigatório')
                    .url('Informe uma url válida para o Avatar'),
                whatsapp: Yup.string().required('Whatsapp obrigatório'),
                cost: Yup.string()
                    .required('Custo obrigatório')
                    .transform((value: string, originalValue: string) => {
                        const newValue = numberUtils.numbers.onlyNumber(value);

                        if (!newValue || newValue <= 0.01) return '';

                        return value;
                    }),
                subject: Yup.string().required('Matéria obrigatória'),
                bio: Yup.string().required('Biografia obrigatória'),
            });

            const schema1 = Yup.object().shape({
                schedules: Yup.array().of(
                    Yup.object().shape({
                        from: Yup.string().required('form obrigatória'),
                        to: Yup.string().required('to obrigatória'),
                        week_day: Yup.string()
                            .required('Dia da semana obrigatória')
                            .matches(/[0-6]/, 'Dia da semana inválido'),
                    }),
                ),
            });

            await Promise.all([
                schemaGeral.validate(data, {
                    abortEarly: false,
                }),
                schema1.validate(
                    { schedules: scheduleItems },
                    { abortEarly: false },
                ),
            ]);

            try {
                const params = { ...data, schedules: scheduleItems };

                const { data: response } = await api.post('classes', params);

                formRef.current.reset();

                addToast({
                    title: 'Cadastro realizado com sucesso!',
                    type: 'success',
                });
            } catch (err) {
                addToast({
                    title: 'Oops, algo de errado ocorreu!',
                    type: 'error',
                    description: err?.message || undefined,
                });
            }
        } catch (err) {
            const errors = formUtils.yupValidationErros(err);
            formRef.current?.setErrors(errors);
            addToast({
                title: 'Oops, algo de errado ocorreu!',
                type: 'error',
            });
        }
    }, [scheduleItems, data, addToast]);

    const observableChangeDataForm = useCallback(
        (
            e: ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >,
        ) => {
            const { value, name } = e.currentTarget;
            setData({ ...data, [name]: value });
        },
        [data],
    );

    const observableChangescheduleForm = useCallback(
        (
            e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
            position: number,
        ) => {
            const { value, name } = e.currentTarget;

            const newschedules = scheduleItems.map((scheduleItem, index) => {
                if (index === position) {
                    return { ...scheduleItem, [name]: value };
                }

                return scheduleItem;
            });

            setscheduleItems(newschedules);
        },
        [scheduleItems],
    );

    if (!subjects) return <h1>Sem Matérias no momento!</h1>;

    const optionsSubject = subjects.map(subject => {
        return { value: subject.id, label: subject.subject };
    });

    return (
        <>
            <Layout title="Proffy Area">
                <PageTeacherForm>
                    <PageHeader
                        title="Que incrível que você quer dar aulas."
                        description="O primeiro passo é preencher esse formulário de inscrição"
                    />
                    <Main>
                        <Form ref={formRef} onSubmit={createHandle}>
                            <fieldset>
                                <legend>Seus dados</legend>

                                <Input
                                    istooltip
                                    name="name"
                                    defaultValue={data.name}
                                    label="Nome completo"
                                    onChange={observableChangeDataForm}
                                />

                                <Input
                                    istooltip
                                    name="avatar"
                                    defaultValue={data.avatar}
                                    label="Avatar"
                                    onChange={observableChangeDataForm}
                                />

                                <InputMask
                                    istooltip
                                    name="whatsapp"
                                    mask="(99) 9 9999-9999"
                                    type="tel"
                                    defaultValue={data.whatsapp}
                                    label="WhatsApp"
                                    onChange={observableChangeDataForm}
                                />

                                <Textarea
                                    istooltip
                                    name="bio"
                                    defaultValue={data.bio}
                                    label="Biografia"
                                    onChange={observableChangeDataForm}
                                />

                                <legend>Sobre a aula</legend>

                                <Select
                                    istooltip
                                    name="subject"
                                    label="Matéria"
                                    defaultValue={data.subject}
                                    onChange={observableChangeDataForm}
                                    options={optionsSubject}
                                />

                                <InputNumber
                                    istooltip
                                    format={
                                        formUtils.inputMaskedCustom
                                            .currencyFormatterPTBR
                                    }
                                    name="cost"
                                    defaultValue={data.cost}
                                    label="Custo da sua hora por aula"
                                    onChange={observableChangeDataForm}
                                />
                            </fieldset>

                            <fieldset>
                                <legend>
                                    Horários disponíveis
                                    <button
                                        type="button"
                                        onClick={addscheduleItemHandle}
                                    >
                                        + Novo Horário
                                    </button>
                                </legend>

                                {scheduleItems.map((schedule, index) => (
                                    <ScheduleItem key={`${uuid()}`}>
                                        <Scope path={`schedules[${index}]`}>
                                            <Select
                                                istooltip
                                                name="week_day"
                                                label="Dia da semana"
                                                defaultValue={schedule.week_day}
                                                onChange={e =>
                                                    observableChangescheduleForm(
                                                        e,
                                                        index,
                                                    )}
                                                options={dateUtils.diasDaSemana()}
                                            />
                                            <Input
                                                istooltip
                                                defaultValue={schedule.from}
                                                name="from"
                                                onChange={e =>
                                                    observableChangescheduleForm(
                                                        e,
                                                        index,
                                                    )}
                                                label="Das"
                                                type="time"
                                            />
                                            <Input
                                                istooltip
                                                defaultValue={schedule.to}
                                                name="to"
                                                onChange={e =>
                                                    observableChangescheduleForm(
                                                        e,
                                                        index,
                                                    )}
                                                label="Até"
                                                type="time"
                                            />
                                        </Scope>
                                    </ScheduleItem>
                                ))}
                            </fieldset>

                            <footer>
                                <p>
                                    <img
                                        src={warningIcon}
                                        alt="Aviso importante"
                                    />
                                    Importante!
                                    <br />
                                    Preencha todos os dados
                                </p>
                                <button type="submit">Salvar cadastro</button>
                            </footer>
                        </Form>
                    </Main>
                </PageTeacherForm>
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/subjects');

    return {
        props: { subjects: data },
        revalidate: 1,
    };
};

export default TeacherForm;
