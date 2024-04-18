import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Box, Typography } from '@mui/material';
import { registrationShema } from '../../../utils/validation/yupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import Input from '../../Input/Input';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Registration: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationShema),
  });

  const onSubmit = () => {
    navigate('/vacancies/active');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box className={styles.modal_box}>
        <Typography variant="h2" fontWeight="500" color='#000'>
          Карьерный Трекер.Найм
        </Typography>
        <Typography variant="body1" color='#797981'>
          Зарегистрировать аккаунт
        </Typography>
        <Box className={styles.input}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                type="text"
                placeholder="Имя"
                register={register}
                registerName="first_name"
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="text"
                placeholder="Фамилия"
                register={register}
                registerName="last_name"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="email"
                placeholder="E-mail"
                register={register}
                registerName="email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="phone_number"
                placeholder="Телефон"
                register={register}
                registerName="phoneNumber"
                error={!!errors.phone_number}
                helperText={errors.phone_number?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="company"
                placeholder="Компания"
                register={register}
                registerName="company"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="password"
                placeholder="Пароль"
                register={register}
                registerName="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" fullWidth>
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
      <Box className={styles.box_question}>
        <Typography variant="body1" color='#797981'>
          Уже есть аккаунт?
        </Typography>
        <Link className={styles.link} to="/">
          Войти
        </Link>
      </Box>
    </form>
  );
};

export default Registration;