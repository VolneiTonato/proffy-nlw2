import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { InputBlock, IconError, ContainerInput, Error } from '../styles';

interface InputProps extends NumberFormatProps {
    name: string;
    label: string;
    istooltip?: boolean;
}

const InputNumber: React.FC<InputProps> = ({ label, name, ...rest }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <InputBlock
            isErrored={!!error}
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <label htmlFor={name}>{label}</label>
            <ContainerInput>
                <NumberFormat
                    isNumericString
                    name={name}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    defaultValue={defaultValue}
                    value={defaultValue}
                    getInputRef={inputRef}
                    autoComplete="off"
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

export default InputNumber;
