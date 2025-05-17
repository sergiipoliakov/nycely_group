'use client'
import { FC, ChangeEvent } from 'react';
import Image from 'next/image'

// Components
import Text from '@/common/Text';

// styles
import styleInput from './index.module.sass';

interface InputInterface {
  name?: string;
  onClick?: () => void,
  classNames?: {
    fieldWrapper?: string,
    field?: string,
    wrapper?: string,
    errors?: string
  }
  disabled?: boolean;
  value?: string | number;
  placeholder?: string;
  toClearValue?: boolean;
  onChange?: (name: string, value: string | number) => void;
  touched?: any;
  type?: string;
  errors?: any;
  id?: string;
  label?: string;
}

const InputComponent: FC<InputInterface> = ({
  name = '',
  onClick,
  value,
  type,
  placeholder = "",
  classNames: {
    field = '',
    fieldWrapper = '',
    errors: errorsClass = '',
    wrapper = ''
  } = {},
  disabled,
  label = '',
  id = "",
  errors,
  onChange,
}) => {
  const inputId = id ? { id } : {},
    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { target: { value = '' } = {} } = event;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && onChange(name, value);
    };

  return (
    <div className={`relative--core z--1 ${wrapper || ''}`} {...inputId} >
      {label ? <label className={`${styleInput['input__label']} margin--b-8 color--white font--400`}>{label}</label> : null}
      <div className={`width--100 ${styleInput['input__field-wrapper']} ${fieldWrapper || ''}`}>
        <input
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onClick={onClick}
          type={type}
          placeholder={placeholder}
          className={`width--100 ${styleInput.input__field} ${field || ''} ${errors ? styleInput['input__field--error'] : ''} `}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      {errors ?
        <>
          <Text className={`${styleInput['input__error']} margin--t-8 ${errorsClass || ''} fl fl--align-c fl--gap-8`} size="small" color='red'>
            {errors}
            <Image src="/warning.svg" alt="warning" width={20} height={20} />
          </Text>
        </>
        : null}
    </div>
  );
};

export default InputComponent;
