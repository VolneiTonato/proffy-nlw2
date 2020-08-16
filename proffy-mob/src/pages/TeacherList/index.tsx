import React, { useState, useCallback, useRef } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Form } from '@unform/mobile';
import api from '@services/api';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native';
import InputText from '@components/Input';
import PageHeader from '@components/PageHeader';
import TeacherItem from '@components/TeacherItem';
import {
    Container,
    TeacherListScroll,
    SearchForm,
    InputBlock,
    InputGroup,
    SearchButonConfirm,
    SearchButonConfirmText,
} from './styles';

const TeacherList: React.FC = () => {
    const [isFiltersVisibled, setFiltersToggle] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const inputWeekDayRef = useRef<TextInput>(null);

    const handleFilterToggle = useCallback(() => {
        setFiltersToggle(prev => !prev);
    }, []);

    const handdleSubmit = useCallback(async () => {
        // submit
    }, []);

    return (
        <Container>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={
                    <BorderlessButton onPress={handleFilterToggle}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }
            >
                {isFiltersVisibled && (
                    <Form onSubmit={handdleSubmit} ref={formRef}>
                        <SearchForm>
                            <InputText
                                label="Matéira"
                                name="materia"
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="default"
                                returnKeyType="next"
                                placeholder="Qual é a matéria?"
                                onSubmitEditing={() =>
                                    inputWeekDayRef.current?.focus()}
                            />

                            <InputGroup>
                                <InputBlock>
                                    <InputText
                                        ref={inputWeekDayRef}
                                        label="Dia da semana"
                                        name="week_day"
                                        placeholder="Qual dia?"
                                    />
                                </InputBlock>
                                <InputBlock>
                                    <InputText
                                        label="Horário"
                                        name="time"
                                        placeholder="Qual horário?"
                                    />
                                </InputBlock>
                            </InputGroup>
                            <SearchButonConfirm
                                onPress={() => formRef.current?.submitForm()}
                            >
                                <SearchButonConfirmText>
                                    Aplicar filtros
                                </SearchButonConfirmText>
                            </SearchButonConfirm>
                        </SearchForm>
                    </Form>
                )}
            </PageHeader>
            <TeacherListScroll
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </TeacherListScroll>
        </Container>
    );
};

export default TeacherList;
