import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginShema } from '../../../utils/validation/yupSchema';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Input/Input';
import styles from './styles.module.css';

// interface Inputs {
//   email: string
//   password: string
// }

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginShema) });

  const onSubmit = () => {
    navigate('/vacancies/active');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box className={styles.modal_box}>
          <Typography component="h2" variant="h5" sx={{ color: '#000' }}>
            Карьерный Трекер.Найм
          </Typography>
          <Typography component="h2" variant="body1" sx={{ fontSize: 16, color: '#797981' }}>
            Войти в аккаунт
          </Typography>
          <Box className={styles.input}>
            <Input
              type="email"
              placeholder="Почта"
              register={register}
              registerName="email"
              error={!!errors.email}
            />
            <Input
              type="password"
              placeholder="Пароль"
              register={register}
              registerName="password"
              error={!!errors.password}
            />
            <Link className={styles.link_password}  to="/password-recovery">
              Не помню пароль
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: '12px', borderRadius: '6', height: 50,
              }}
            >
              Войти
            </Button>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
        }}
        >
          <Typography variant="body1" sx={{ fontWeight: 400, color: '#797981' }}>Новый пользователь?</Typography>
          <Link
            className={styles.link}
            to="/signup"
          >
            Зарегистрироваться
          </Link>
        </Box>
      </form>
    </>
  );
};

export default Login;
