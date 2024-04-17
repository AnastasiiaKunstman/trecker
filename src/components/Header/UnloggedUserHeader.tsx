import {
  AppBar, Toolbar, Container, MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/H.svg';
import styles from './styles.module.css';

export default function UnloggedUserHeader() {
  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <MenuItem component={Link} to="/">
              <img className={styles.img__logo} src={Logo} alt="Логотип" />
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
