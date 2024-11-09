import React from 'react';
import '../styles/category.css';
import CategoryIcon from '../assets/categoryicon'; // Importa el componente
import cat1 from '../assets/img-category/cat1.png';
import cat2 from '../assets/img-category/cat2.png';
import cat3 from '../assets/img-category/cat3.png';
import cat4 from '../assets/img-category/cat4.png';
import cat5 from '../assets/img-category/cat5.png';
import cat6 from '../assets/img-category/cat6.png';
import cat7 from '../assets/img-category/cat7.png';
import cat8 from '../assets/img-category/cat8.png';
import cat9 from '../assets/img-category/cat9.png';
import cat10 from '../assets/img-category/cat10.png';

const categories = [
    { src: cat1, label: "Camisetas" },
    { src: cat2, label: "Pantalones" },
    { src: cat3, label: "Camisas" },
    { src: cat4, label: "Accesorios" },
    { src: cat5, label: "Oberoles" },
    { src: cat6, label: "Chaquetas" },
    { src: cat7, label: "Faldas" },
    { src: cat8, label: "Blusas" },
    { src: cat9, label: "Packs" },
    { src: cat10, label: "Shorts" }
];

const CategoryComponent = () => {
    return (
        <div className="category-section-container">
            <div className="category-header">
                <h3>IN YOUR STYLE</h3>
                <CategoryIcon /> {/* Usa el componente SVG en lugar de <h2>Category</h2> */}
                <p>Buscar por categoría</p>
            </div>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src={category.src} alt={`Categoría ${index + 1}`} />
                        <p>{category.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryComponent;
