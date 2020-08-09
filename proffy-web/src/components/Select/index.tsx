import React, { SelectHTMLAttributes } from 'react';

import { SelectBlock } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    options: Array<{
        value: string
        label: string
    }>
}

const Select: React.FC<SelectProps> = ({
  name, label, options, ...rest
}) => (
  <SelectBlock>
    <label htmlFor={name}>{label}</label>
    <select name={name} {...rest}>
      <option defaultValue="" disabled selected hidden>Selecione uma opção</option>
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  </SelectBlock>
);

export default Select;
