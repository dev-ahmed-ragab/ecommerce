import { Container } from 'react-bootstrap';
import styles from './styles.module.css';
import Header from '../../components/common/Header/Header';
const MainLayout = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </Container>
  );
};

export default MainLayout;
