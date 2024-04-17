import { FC } from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import UnloggedUserHeader from '../Header/UnloggedUserHeader';
import Footer from '../Footer/Footer';
import styles from './styles.module.css';

enum EPodComponent {
  login,
  registration,
}

type TPodComponent = keyof typeof EPodComponent;

interface IAuthProps {
  podComponent: TPodComponent
}

const Auth: FC<IAuthProps> = ({ podComponent = 'login' }) => (
  <div className={styles.auth}>
    <UnloggedUserHeader />
    <main>
      {podComponent === 'login' ? <Login /> : <Registration />}
    </main>
    <Footer />
  </div>
);

export default Auth;