import { Button } from 'react-bootstrap';
import styles from './styles.module.css';
const { product, productImg } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="https://yt3.ggpht.com/ll7rPWa-NLm_43dOYHqX5eTi2RMUnzUhUmO3zPteEQiHU7rr3yaQXMucFdcPFumW7m7gFQ43Ug=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" style={{ color: 'white' }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
