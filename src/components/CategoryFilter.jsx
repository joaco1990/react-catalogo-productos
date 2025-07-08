// Importaciones de React
import React from 'react';

// Importaciones de estilos
import './CategoryFilter.css';

/**
 * Componente CategoryFilter - Filtro de categorías
 * 
 * Renderiza botones para filtrar productos por categoría.
 * Destaca visualmente la categoría actualmente seleccionada.
 * 
 * Props que recibe:
 * - categories: array - Lista de categorías disponibles
 * - selectedCategory: string - Categoría actualmente seleccionada
 * - onSelectCategory: function - Función callback para cambiar categoría
 * 
 * Uso:
 * <CategoryFilter
 *   categories={['Todas', 'Consolas', 'Juegos']}
 *   selectedCategory="Consolas"
 *   onSelectCategory={setSelectedCategory}
 * />
 */
const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  // Manejador para el clic en botones de categoría
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 