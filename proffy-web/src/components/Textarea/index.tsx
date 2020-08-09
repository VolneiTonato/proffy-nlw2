import React, { TextareaHTMLAttributes } from 'react';

import { TextareaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string
    label: string
}

const Textarea:React.FC<TextareaProps> = ({ name, label, ...rest }) => (
  <TextareaBlock>
    <label htmlFor={name}>{label}</label>
    <textarea name={name} {...rest} />
  </TextareaBlock>
);

export default Textarea;
