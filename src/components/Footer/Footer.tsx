import {
  Box, Typography
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <a className={styles.link} href="/">
        <TelegramIcon className={styles.telegram} fontSize='small' />
        Написать в поддержку
      </a>
      <Typography variant="body2" color="#B5B5B7">Собирай линии успеха</Typography>
      <Typography variant="body2" color="#B5B5B7">
        ©  Карьерный трекер,
        {' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
