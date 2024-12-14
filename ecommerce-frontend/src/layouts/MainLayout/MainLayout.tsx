import { Container } from 'react-bootstrap';
import styles from './styles.module.css';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
const MainLayout = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
