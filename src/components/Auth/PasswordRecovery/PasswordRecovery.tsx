import {
  Box,
  Button, Link, TextField, Typography,
} from '@mui/material';
import UnloggedUserHeader from '../../Header/UnloggedUserHeader';
import Footer from '../../Footer/Footer';
import styles from './styles.module.css';

export default function PasswordRecovery() {
  return (
    <Box className={styles.password_modal}>
      <UnloggedUserHeader />
      <form>
        <Box className={styles.modal_box}>
          <Typography variant="h2" sx={{ fontWeight: 500, color: '#000' }}>
            Карьерный Трекер.Найм
          </Typography>
          <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
          }}
          >
            <Typography variant="body1" sx={{ color: '#1A1B22' }}>
              Восстановление пароля
            </Typography>
            <Typography variant="body1" sx={{ color: '#797981', textAlign: 'center' }}>
              Введите почту, указанную при регистрации
            </Typography>
          </Box>
          <Box>
            <TextField
              fullWidth
              id="email"
              placeholder="Почта"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: '24px', borderRadius: '6', height: 50,
              }}
            >
              Восстановить пароль
            </Button>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px',
        }}
        >
          <Link
            className="link"
            href="/"
            variant="body2"
            underline="none"
            sx={{ py: 3, color: '#fff' }}
          >
            Назад
          </Link>
        </Box>
      </form>
      <Footer />
    </Box>
  );
}
