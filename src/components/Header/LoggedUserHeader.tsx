import { FC } from 'react';
import {
  AppBar, Box, Toolbar, Button, MenuItem,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/H.svg';
import User from '../../assets/userActive.svg';
import styles from './styles.module.css';
import { pages } from '../../utils/constans/constans';

const LoggedUserHeader: FC = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{
            display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'
          }}
          >
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }} >
              <MenuItem component={Link} to="/vacancies/active">
                <img className={styles.img__logo} src={Logo} alt="Логотип" />
              </MenuItem>
              {pages.map((page) => (
                <Link
                  key={page.id}
                  to={page.path}
                  className={styles.link}
                >
                  {page.name}
                </Link>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }} >
              <MenuItem sx={{ padding: 0, height: '100%' }} component={Link} to="/profile">
                <img className={styles.img__header} src={User} alt="Профиль" />
              </MenuItem>
              <Button
                onClick={onLogout}
                sx={{
                  border: '1px solid #fff',
                  boxShadow: 'none',
                  color: 'white',
                  fontSize: '14px',
                  '&:hover': {
                    opacity: '0.8',
                  },
                }}
              >
                Выйти
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default LoggedUserHeader;
