import React, {
    TextareaHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { useField } from '@unform/core';
import { TextareaBlock, IconError, Error, ContainerTextarea } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    istooltip?: boolean;
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!textareaRef.current?.value);
    }, []);

    return (
        <TextareaBlock
            isErrored={!!error}
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <label htmlFor={name}>{label}</label>
            <ContainerTextarea>
                <textarea
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    defaultValue={defaultValue}
                    ref={textareaRef}
                    name={name}
                    autoComplete="off"
                    {...rest}
                />
                {error && rest?.istooltip && (
                    <Error title={error}>
                        <IconError size={20} />
                    </Error>
                )}
            </ContainerTextarea>
        </TextareaBlock>
    );
};

export default Textarea;
