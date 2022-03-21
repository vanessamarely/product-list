import { Card, ImgContainer, TextContainer } from "./Product.styled";

const Product = ({ product }) => (
  <Card>
    <ImgContainer>
      <img src={product.image} alt={product.name} loading="lazy" />
    </ImgContainer>
    <TextContainer>
      <h3 className="text-item">{product.name}</h3>
      <p className="text-item">{product.price}</p>
    </TextContainer>
  </Card>
);

export default Product;
