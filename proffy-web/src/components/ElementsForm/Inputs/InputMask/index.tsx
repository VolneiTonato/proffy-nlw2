import React, { useRef, useEffect, useCallback, useState } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

import { InputBlock, IconError, ContainerInput, Error } from '../styles';

interface Props extends InputProps {
    name: string;
    label: string;
    istooltip?: boolean;
}
const InputMask: React.FC<Props> = ({ label, name, ...rest }) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                ref.setInputValue(value);
            },
            clearValue(ref: any) {
                ref.setInputValue('');
            },
        });
    }, [fieldName, registerField]);
    return (
        <InputBlock
            isErrored={!!error}
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <label htmlFor={name}>{label}</label>
            <ContainerInput>
                <ReactInputMask
                    name={name}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    autoComplete="off"
                    ref={inputRef}
                    defaultValue={defaultValue}
                    {...rest}
                />
                {error && rest?.istooltip && (
                    <Error title={error}>
                        <IconError size={20} />
                    </Error>
                )}
            </ContainerInput>
        </InputBlock>
    );
};
export default InputMask;
