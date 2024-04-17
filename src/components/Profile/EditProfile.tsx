import {
  Avatar,
  TextField,
  Grid,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationShema } from '../../utils/validation/yupSchema';
import { user } from '../../utils/mock/user';
import vacancyList, { Vacancy } from '../../utils/mock/vacancies';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
// import Snackbars from '../SnackBars/SnackBars';

interface EditProfileProps {
  onChange: (field: string, value: string) => void
  onClick: () => void
  onSave: (e: React.FormEvent) => void
}

const EditProfile: FC<EditProfileProps> = ({ onChange, onClick, onSave }) => {
  // const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  // const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  // const [snackbarMessage, setSnackbarMessage] = useState('');

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationShema),
  });

  // const handleCloseSnackbar = () => {
  //   setSnackbarOpen(false);
  // };

  return (
    <>
      <form noValidate onSubmit={onSave}>
        <Grid container gap="40px">
          <Grid
            item
            xs={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '40px',
              height: '593px',
            }}
          >
            <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Grid sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '154px', alignItems: 'center', margin: '22px 28.5px' }}>
                  <Avatar alt="Аватар" src={user?.avatar} sx={{ width: '60px', height: '60px' }} />
                  <Typography variant="body2" sx={{ color: '#1D6BF3', fontWeight: 500, lineHeight: '20px' }}>
                    Заменить фото
                  </Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                  <Grid xs item>
                    <Typography variant="body2" fontWeight={500}>
                      Имя
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Имя"
                      variant="outlined"
                      size="small"
                      sx={{ marginTop: '4px' }}
                      defaultValue={user?.first_name}
                      error={!!errors.first_name}
                      helperText={errors.first_name ? `${errors.first_name.message}` : ''}
                      {...register('first_name')}
                      onChange={(e) => onChange('first_name', e.target.value)}
                    />
                  </Grid>
                  <Grid xs item>
                    <Typography variant="body2" fontWeight={500}>
                      Фамилия
                    </Typography>
                    <TextField
                      sx={{ marginTop: '4px' }}
                      fullWidth
                      size="small"
                      placeholder="Фамилия"
                      variant="outlined"
                      defaultValue={user?.last_name}
                      onChange={(e) => onChange('last_name', e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex' }} gap="12px">
                <Grid xs={6} item>
                  <Typography variant="body2" fontWeight={500}>
                    Почта
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    sx={{ marginTop: '4px' }}
                    placeholder="Почта"
                    variant="outlined"
                    defaultValue={user?.email}
                    error={!!errors.email}
                    helperText={errors.email ? `${errors.email.message}` : ''}
                    {...register('email')}
                    onChange={(e) => onChange('email', e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <Typography variant="body2" fontWeight={500}>
                    Пароль
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    sx={{ marginTop: '4px' }}
                    placeholder="Пароль"
                    variant="outlined"
                    defaultValue={user?.password}
                    error={!!errors.password}
                    helperText={errors.password ? `${errors.password.message}` : ''}
                    {...register('password')}
                    onChange={(e) => onChange('password', e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid container xs={12} item marginTop="6px" height="349px">
              <Grid xs item>
                <Typography variant="body2" fontWeight={500}>
                  Шаблон
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Подготовьте заранее письмо или ссылку на тестовое задание"
                  sx={{
                    color: '#797981', marginTop: '4px', marginBottom: '8px', borderRadius: '4px',
                  }}
                  variant="outlined"
                  multiline
                  rows="9.5"
                />
                <Box sx={{ display: 'flex', gap: '20px', height: '40px' }}>
                  <Button variant="outlined" sx={{ width: '50%' }}>
                    <LinkIcon fontSize='small' sx={{ color: '#1D6BF3' }} />
                  </Button>
                  <Button variant="outlined" sx={{ width: '50%' }}>
                    Запомнить шаблон
                  </Button>
                </Box>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              height: '593px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Grid sx={{ width: '50%' }}>
                <Typography variant="subtitle1" fontWeight={500}>
                  Название компании
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ marginTop: '4px' }}
                  defaultValue={user?.company}
                  onChange={(e) => onChange('company', e.target.value)}
                />
              </Grid>
              <Grid sx={{ width: '50%' }}>
                {/* <LocationFilter /> */}
              </Grid>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={500} sx={{ mb: '4px' }}>
                Вакансии в работе:
                {' '}
                {`${vacancyList.length === 0 ? 'У вас еще нет активных вакансий' : `${vacancyList.length}`}`}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {vacancyList.map((vacancies: Vacancy) => (
                  <Box
                    key={vacancies.id}
                    sx={{
                      borderRadius: '4px',
                      backgroundColor: '#F1F6FF',
                      color: '#1A1B22',
                      textAlign: 'center',
                      height: 'min-content',
                      width: 'max-content',
                      padding: '6px 12px',
                      margin: '4px',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Typography variant="body2" lineHeight="16px">
                        {vacancies.name}
                      </Typography>
                      <CloseIcon fontSize='small' />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body2" fontWeight={500}>
                Сфера деятельности
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Например, Fintech"
                sx={{ width: '50%', borderRadius: '4px', marginTop: '4px' }}
              />
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={500}>
                Описание компании
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                sx={{ borderRadius: '4px', marginTop: '4px' }}
                placeholder="Описание компании"
                minRows={10}
                maxRows={11}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{
          display: 'flex',
          justifyContent: 'end',
          mt: '30px',
          gap: '20px',
        }}
        >
          <Button variant="outlined" onClick={onClick}>
            Отмена
          </Button>
          <Button type="submit" variant="contained" sx={{ width: '386px' }}>
            Сохранить
          </Button>
        </Box>
      </form>

      {/* <Snackbars
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      /> */}
    </>
  )
}

export default EditProfile;