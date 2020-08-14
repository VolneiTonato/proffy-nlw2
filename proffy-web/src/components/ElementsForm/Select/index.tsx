import React, {
    SelectHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { useField } from '@unform/core';
import { SelectBlock, IconError, Error, ContainerSelect } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    istooltip?: boolean;
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!selectRef.current?.value);
    }, []);

    return (
        <SelectBlock
            isErrored={!!error}
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <label htmlFor={name}>{label}</label>
            <ContainerSelect>
                <select
                    name={name}
                    {...rest}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    defaultValue={defaultValue}
                    autoComplete="off"
                    ref={selectRef}
                    {...rest}
                >
                    <option defaultValue="" value="" selected>
                        Selecione uma opção
                    </option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && rest?.istooltip && (
                    <Error title={error}>
                        <IconError size={20} />
                    </Error>
                )}
            </ContainerSelect>
        </SelectBlock>
    );
};

export default Select;
