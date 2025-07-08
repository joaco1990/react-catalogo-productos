// Importaciones de React y hooks
import React, { useState } from 'react';

// Importaciones de componentes
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';

// Importaciones de estilos
import './App.css';

// Importaciones de imágenes
import ps5Image from './assets/ps5.jpg';
import xboxImage from './assets/xbox-series-x.jpg';
import zeldaImage from './assets/zelda-totk.jpg';
import dualsenseImage from './assets/dualsense.jpg';
import switchImage from './assets/switch-oled.jpg';
import headsetImage from './assets/pulse-3d.jpg';

// Constantes
export const categories = ['Todas', 'Consolas', 'Juegos', 'Accesorios'];

// Array de productos con imágenes importadas
const products = [
  {
    id: 1,
    name: 'PlayStation 5',
    description: 'Consola de última generación de Sony con gráficos 4K y SSD ultrarrápido.',
    price: 699.99,
    category: 'Consolas',
    image: ps5Image,
  },
  {
    id: 2,
    name: 'Xbox Series X',
    description: 'La consola más potente de Microsoft, con soporte para juegos en 4K.',
    price: 679.99,
    category: 'Consolas',
    image: xboxImage,
  },
  {
    id: 3,
    name: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'Aventura épica exclusiva para Nintendo Switch.',
    price: 69.99,
    category: 'Juegos',
    image: zeldaImage,
  },
  {
    id: 4,
    name: 'DualSense Wireless Controller',
    description: 'Control inalámbrico para PlayStation 5 con retroalimentación háptica.',
    price: 79.99,
    category: 'Accesorios',
    image: dualsenseImage,
  },
  {
    id: 5,
    name: 'Nintendo Switch OLED',
    description: 'Consola híbrida de Nintendo con pantalla OLED de 7 pulgadas.',
    price: 499.99,
    category: 'Consolas',
    image: switchImage,
  },
  {
    id: 6,
    name: 'Headset Inalámbrico Pulse 3D',
    description: 'Auriculares inalámbricos optimizados para audio 3D en PS5.',
    price: 99.99,
    category: 'Accesorios',
    image: headsetImage,
  },
];

/**
 * Componente principal de la aplicación
 * 
 * Renderiza un catálogo de productos de videojuegos con funcionalidades de:
 * - Filtrado por categoría
 * - Búsqueda por nombre o descripción
 * - Visualización en tarjetas de productos
 */
function App() {
  // Estados para filtrado y búsqueda
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [search, setSearch] = useState('');

  // Filtra productos según categoría seleccionada y término de búsqueda
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Manejador para cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="app-container">
      {/* Título principal */}
      <h1 className="app-title">🎮 Catálogo de Videojuegos</h1>
      <p className="app-subtitle">Descubre los mejores productos gaming del mercado</p>

      {/* Sección de filtros y búsqueda */}
      <div className="filters-container">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por nombre o descripción..."
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>

      {/* Lista de productos */}
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p className="no-products-message">
            No hay productos para esta categoría.
          </p>
        ) : (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
