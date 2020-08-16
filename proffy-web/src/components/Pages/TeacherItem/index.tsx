import React, { useCallback, MouseEvent } from 'react';
import { NextPage } from 'next';
import numberUtils from '@utils/number';
import api from '@services/api';

import whatsappIcon from '@static/images/icons/whatsapp.svg';
import { Container } from './styles';

interface Teacher {
    user: {
        id: string;
        name: string;
        bio: string;
        avatar: string;
        whatsapp: string;
    };
    subject: {
        id: string;
        subject: string;
    };
    cost: number;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: NextPage<TeacherItemProps> = ({ teacher }) => {
    const handleCreateConnection = useCallback(
        (e: MouseEvent) => {
            api.post('connections', { user_id: teacher.user.id });
        },
        [teacher],
    );

    return (
        <Container>
            <header>
                <img src={teacher.user?.avatar} alt={teacher.user?.name} />
                <div>
                    <strong>{teacher.user?.name}</strong>
                    <span>{teacher.subject?.subject}</span>
                </div>
            </header>

            <p>{teacher.user?.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>
                        {numberUtils.numbers.currencyFormatterPTBR(
                            teacher.cost,
                        )}
                    </strong>
                </p>

                <a
                    onClick={handleCreateConnection}
                    target="_blank"
                    href={`https://wa.me/+55${teacher.user?.whatsapp}`}
                >
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </Container>
    );
};

export default TeacherItem;
