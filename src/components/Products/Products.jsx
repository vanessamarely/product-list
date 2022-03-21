import { Product } from "../";
import { WrapperProducts } from "./Products.styled";

const Products = ({ productList }) => (
  <WrapperProducts>
    {productList.length > 0 ? (
      productList?.map((product) => (
        <Product key={product.id} product={product} />
      ))
    ) : (
      <p>No products found</p>
    )}
  </WrapperProducts>
);

export default Products;
