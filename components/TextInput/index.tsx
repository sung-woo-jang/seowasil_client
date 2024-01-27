import { HTMLInputTypeAttribute } from 'react';
import classes from './styles.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ITextInputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  disabled?: boolean | undefined;
}

export default function TextInput({
  label,
  id,
  placeholder,
  type,
  register,
  disabled,
}: ITextInputProps) {
  return (
    <div className={classes.TextInputWrapper}>
      <label className={classes.InputLabel} htmlFor={id}>
        {label}
      </label>
      <div style={{ marginTop: '0.5rem' }} />
      <input
        className={classes.TextInputField}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </div>
  );
}
