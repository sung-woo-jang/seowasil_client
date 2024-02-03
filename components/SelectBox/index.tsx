'use client';
import useIsMounted from '@/hooks/useIsMounted';
import classes from './styles.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ISelectBoxProps {
  placeholder: string;
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  options?: { id: number; value: string }[];
}
function SelectBox({ label, id, placeholder, options, register }: ISelectBoxProps) {
  const isMounted = useIsMounted();
  return (
    <div className={classes.selectWrapper}>
      <label className={classes.selectLabel} htmlFor={id}>
        {label}
      </label>

      <select
        className={classes.selectField}
        style={{ marginTop: '0.5rem' }}
        {...register}
      >
        <option className={classes.selectPlaceholder} value={undefined} hidden>
          {placeholder}
        </option>
        <option className={classes.selectOption} value={undefined} disabled={true}>
          카테고리 선택
        </option>
        {isMounted &&
          options?.map(({ id, value }) => (
            <option className={classes.selectOption} key={id} value={id}>
              {value}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectBox;
