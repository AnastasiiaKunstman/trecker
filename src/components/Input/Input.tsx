/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps, TextField, TextFieldProps } from '@mui/material';
import styles from './styles.module.css';

const sxStyles: SxProps = {
  width: '100%',
  '& .MuiInputLabel-root': {
    transition: 'none',
  },
  '& .MuiInputBase-input.MuiOutlinedInput-input': {
    height: '20px',
    margin: '0',
    backgroundColor: '#fff',
  },
  '& .MuiInputBase-input:disabled': {
    border: '1px solid #DDE0E4',
    borderRadius: '4px',
    backgroundColor: '#F9FAFB',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: '#FF0200',
    margin: 0,
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':
    {
      border: '1px solid #FF0200',
    },
};

export type TInputProps = {
  customLabel?: string
  register?: any
  registerName?: string
  registerOptions?: any
};

function Input(props: TextFieldProps & TInputProps) {
  const {
    customLabel, register, registerName, registerOptions, sx, ...rest
  } = props;

  return (
    <>
      {customLabel && <span className={styles.label_custom}>{customLabel}</span>}
      <TextField
        {...register(`${registerName}`, registerOptions)}
        sx={sxStyles}
        {...rest}
      />
    </>
  );
}

export default Input;
