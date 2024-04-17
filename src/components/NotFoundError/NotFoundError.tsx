import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function NotFoundError() {
  const navigate = useNavigate();

  const handleNotFClose = () => {
    // Возвращаемся к предыдущему пути
    navigate(-1);
  };

  return (
    <section className={styles.not_found__error}>
      <h1 className={styles.not_found__title}>404</h1>
      <p className={styles.not_found__desc}>Страница не найдена</p>
      <button type="button" className={styles.not_found__link} onClick={handleNotFClose}>Назад</button>
    </section>
  );
}

export default NotFoundError;
