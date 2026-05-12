import ProductScreen from "../../components/screens/product/product-screen"; 
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <ProductScreen /> 
  );
};

export default Product;
