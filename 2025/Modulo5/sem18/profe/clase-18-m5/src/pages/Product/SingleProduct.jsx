import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product])

  if (!product) return null;
  return (
    <div className="single-product-container">
      <div className="single-product-card">
        <img
          src={product.image}
          alt={product.title}
          className="single-product-image"
        />
        <div className="single-product-info">
          <h1 className="single-product-title">{product.title}</h1>
          <p className="single-product-category">
            Categoría: {product.category}
          </p>
          <p className="single-product-description">{product.description}</p>
          <p className="single-product-price">${product.price}</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
