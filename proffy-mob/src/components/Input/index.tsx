import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Label } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    label: string;
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
    { name, label, ...rest },
    ref,
) => {
    const { fieldName, defaultValue = '', error, registerField } = useField(
        name,
    );
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const inputRef = useRef<any>(null);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(refSelf: any, value) {
                inputValueRef.current.value = value;
                inputRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputRef.current.clear();
            },
        });
    }, [fieldName, registerField]);

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current.focus();
        },
    }));

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <Container
            isErrored={!!error}
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <Label>{label}</Label>
            <TextInput
                keyboardAppearance="dark"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                defaultValue={defaultValue}
                ref={inputRef}
                onChangeText={value => {
                    inputValueRef.current.value = value;
                }}
                {...rest}
            />
        </Container>
    );
};

export default forwardRef(Input);
