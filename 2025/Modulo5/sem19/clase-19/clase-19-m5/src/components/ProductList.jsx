import { useState } from 'react';
import SearchBar from './SearchBar';

const products = ["Guitarra", "Bajo", "Bateria", "Teclado", "Voz"];
const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (value) => {
        setSearchTerm(value.toLowerCase()   );
    };
        const filteredProducts = products.filter((product) =>
            product.toLocaleLowerCase().includes(searchTerm)
    );
    
  return (
    <div>
        <h2>Lista de Productos</h2>
        <SearchBar onSearch={handleSearch} />
        <ul>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product}</li>
            ))}
        </ul>
    </div>
  );
};
export default ProductList;