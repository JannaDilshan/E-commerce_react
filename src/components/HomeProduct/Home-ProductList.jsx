import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';


const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Pro-mariner',
      description: 'Pro-mariner is an Automatic See Through Back Professional Divers Watch',
      price: 364.99,
      image: 'https://classiquewatches.com/cdn/shop/files/9002W-KBKV.png?v=1730775923',
      category: 'Diver',
    },
    {
      id: 2,
      name: 'Ryan',
      description: 'Ryan is a classic yet stylish wearable watch fitted with a Swiss Quartz Movement',
      price: 465.0,
      image: 'https://classiquewatches.com/cdn/shop/files/28-149G-XBU0.png?v=1731979866',
      category: 'Classic',
    },
    {
      id: 3,
      name: 'Brooks',
      description: 'The Brooks Watch features a rectangular casing and bracelet band',
      price: 497.99,
      image: 'https://classiquewatches.com/cdn/shop/files/28-114G-XBC9.png?v=1731458264',
      category: 'Modern',
    },
    {
      id: 4,
      name: 'Brooklyn',
      description: 'The Brooklyn Watch features a rectangular casing and bracelet band',
      price: 649.0,
      image: 'https://classiquewatches.com/cdn/shop/files/28-113W-XBMD.png?v=1731458050',
      category: 'Modern',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <>
      
      <div className="product-list-container">
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            min="0"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            min="0"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Diver">Diver</option>
            <option value="Classic">Classic</option>
            <option value="Modern">Modern</option>
          </select>
        </div>

        {/* Product List */}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
