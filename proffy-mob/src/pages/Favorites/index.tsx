import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Container, FovoritesTeacherListScroll } from './styles';

const Favorites: React.FC = () => {
    return (
        <Container>
            <PageHeader title="Proffys disponíveis" />
            <FovoritesTeacherListScroll
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </FovoritesTeacherListScroll>
        </Container>
    );
};

export default Favorites;
