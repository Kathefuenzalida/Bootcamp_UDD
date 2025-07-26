import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]); // products = []  => products = {{...}}
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Error en la respuesta del servidor');

      const formattedResponse = await response.json();
      setProducts(formattedResponse);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catalogo de productos</h1>
      {error && <p className="error-message">{error}</p>}
      {!error && products.length === 0 && <p>Cargando productos...</p>}
      <div className="product-grid">
        {products &&
          products.map(product => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product-link"
              state={{ product }}
            >
              <div className="product-card">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList

// EJERCICIO 3
// - Crea dos estados utilizando el hooks useState.
// - El primer estado es para guardar los datos de los productos que vendran desde la API
// - El segundo estado es para guardar un posible error al momento de llamar a la API