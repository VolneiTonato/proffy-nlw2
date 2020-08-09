import React, {
  useState, useCallback, ChangeEvent, FormEvent,
} from 'react';
import { GetStaticProps } from 'next';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { PageTeacherForm, Main, ScheduleItem } from './styles';

const warningIcon = '/images/icons/warning.svg';

interface IShedule {
  week_day: string
  from: string
  to: string
}

interface IDataForm{
  name: string
  avatar:string
  whatsapp:string
  bio:string
  subject:string
  cost: number
}
/*
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<Veiculo[]>(
    'https://parallelum.com.br/fipe/api/v1/carros/marcas',
  );

  return {
    props: { veiculos: data },
  };
}; */

const TeacherForm = () => {
  const [sheduleItems, setSheduleItems] = useState<IShedule[]>([{ from: '', to: '', week_day: '' }]);

  const [data, setData] = useState<IDataForm>({
    avatar: '',
    bio: '',
    cost: 0.00,
    subject: '',
    name: '',
    whatsapp: '',
  });

  const addSheduleItemHandle = useCallback(() => {
    setSheduleItems([...sheduleItems, { from: '', to: '', week_day: '' }]);
  }, [sheduleItems]);

  const createHandle = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const { data: response } = await api.post('classes', { ...data, shedules: sheduleItems });
  }, [sheduleItems, data]);

  const observableChangeDataForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;

    setData({ ...data, [name]: value });
  }, [data]);

  const observableChangeSheduleForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, position: number) => {
    const { value, name } = e.currentTarget;

    const newshedules = sheduleItems.map((sheduleItem, index) => {
      if (index === position) { return { ...sheduleItem, [name]: value }; }

      return sheduleItem;
    });

    setSheduleItems(newshedules);
  }, [sheduleItems]);

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <Main>
        <form onSubmit={createHandle}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" value={data.name} label="Nome completo" onChange={observableChangeDataForm} />

            <Input name="avatar" value={data.avatar} label="Avatar" onChange={observableChangeDataForm} />

            <Input name="whatsapp" value={data.whatsapp} label="WhatsApp" onChange={observableChangeDataForm} />

            <Textarea name="bio" value={data.bio} label="Biografia" onChange={observableChangeDataForm} />

            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={data.subject}
              onChange={observableChangeDataForm}
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

            <Input name="cost" defaultValue={data.cost} label="Custo da sua hora por aula" onChange={observableChangeDataForm} />

          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis

              <button type="button" onClick={addSheduleItemHandle}>+ Novo Horário</button>

            </legend>

            {sheduleItems.map((shedule, index) => (
              <ScheduleItem key={shedule.week_day}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={shedule.week_day}
                  onChange={(e) => observableChangeSheduleForm(e, index)}
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
                <Input value={shedule.from} name="from" onChange={(e) => observableChangeSheduleForm(e, index)} label="Das" type="time" />
                <Input value={shedule.to} name="to" onChange={(e) => observableChangeSheduleForm(e, index)} label="Até" type="time" />
              </ScheduleItem>
            ))}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              {' '}
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>

        </form>

      </Main>
    </PageTeacherForm>
  );
};

export default TeacherForm;
