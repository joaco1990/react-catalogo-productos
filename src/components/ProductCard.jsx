// Importaciones de React
import React, { useState } from 'react';

// Importaciones de PropTypes
import PropTypes from 'prop-types';

// Importaciones de estilos
import './ProductCard.css';

/**
 * Componente ProductCard - Tarjeta de producto individual
 * 
 * Este componente renderiza una tarjeta visual para mostrar información de un producto
 * de videojuegos. Incluye una imagen, nombre, descripción, precio y categoría.
 * 
 * Props que recibe:
 * - name: string - Nombre del producto (ej: "PlayStation 5")
 * - description: string - Descripción detallada del producto
 * - price: number - Precio del producto en formato numérico
 * - category: string - Categoría del producto (ej: "Consolas", "Juegos", "Accesorios")
 * - image: string - URL o ruta de la imagen del producto
 * 
 * Uso:
 * <ProductCard 
 *   name="PlayStation 5"
 *   description="Consola de última generación..."
 *   price={699.99}
 *   category="Consolas"
 *   image="/assets/ps5.jpg"
 * />
 */
const ProductCard = ({ name, description, price, category, image }) => {
  // Estado para manejar errores de carga de imagen
  const [imageError, setImageError] = useState(false);
  
  // URL de imagen de placeholder
  const placeholderImage = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=center';
  
  // Manejador para errores de carga de imagen
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-card">
      {/* Imagen del producto con texto alternativo descriptivo para accesibilidad */}
      <img 
        src={imageError ? placeholderImage : image} 
        alt={name} 
        className="product-image"
        onError={handleImageError}
      />
      
      {/* Título del producto */}
      <h2>{name}</h2>
      
      {/* Descripción detallada del producto */}
      <p>{description}</p>
      
      {/* Precio del producto formateado con símbolo de moneda */}
      <p><strong>Precio:</strong> ${price}</p>
      
      {/* Categoría del producto */}
      <p><strong>Categoría:</strong> {category}</p>
    </div>
  );
};

// Validación de PropTypes para asegurar que las props tengan los tipos correctos
// y sean requeridas para el funcionamiento del componente
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,        // Nombre del producto (requerido)
  description: PropTypes.string.isRequired, // Descripción del producto (requerido)
  price: PropTypes.number.isRequired,       // Precio del producto (requerido)
  category: PropTypes.string.isRequired,    // Categoría del producto (requerido)
  image: PropTypes.string.isRequired,       // Ruta de la imagen (requerido)
};

export default ProductCard; 