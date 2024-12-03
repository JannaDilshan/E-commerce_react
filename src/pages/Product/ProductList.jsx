import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.css';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

function ProductList()  {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

 
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

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
      price: 465.00,
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
      price: 649.00,
      image: 'https://classiquewatches.com/cdn/shop/files/28-113W-XBMD.png?v=1731458050',
      category: 'Modern',
    },
    {
      id: 5,
      name: 'Rory',
      description: 'The Rory Watch features a classic round setting with a Stainless Steel Mesh Band ',
      price: 329.00,
      image: 'https://classiquewatches.com/cdn/shop/files/28-151G-XKW0.png?v=1732516507',
      category: 'Diver',
    }, {
      id: 6,
      name: 'Sterling',
      description: 'The Sterling Watch is bold and sophisticated, with a Swiss Quartz',
      price: 479.00,
      image: 'https://classiquewatches.com/cdn/shop/files/28-101G-XBU0.png?v=1730776028',
      category: 'Bracelet',
    }, {
      id: 7,
      name: 'Vintage Square Shape Ring Ladies Watch',
      description: 'Unique and bold, this watch ring is the perfect way to elevate your jewellery style',
      price: 187.00,
      image: 'https://classiquewatches.com/cdn/shop/files/28-70G-XOSI.jpg?v=1731468307',
      category: 'Vintage',
    }, {
      id: 8,
      name: 'Vintage Round Shape Ring Ladies Watch',
      description: 'Unique and bold, this watch ring is the perfect way to elevate your jewellery style',
      price: 192.00,
      image: 'https://classiquewatches.com/cdn/shop/files/28-69G-XOSI.jpg?v=1731461600',
      category: 'Vintage',
    }, {
      id: 9,
      name: 'Vintage Square Half Bangle Ladies Watch',
      description: 'Unique and trendy, this watch features a square face and a flat half bangle strap. ',
      price: 210.00,
      image: 'https://classiquewatches.com/cdn/shop/files/18-86W-XGWN.jpg?v=1730935207',
      category: 'Vintage',
    }, {
      id: 10,
      name: 'Sienna',
      description: 'A unique take on the classic bangle design, the detailed band of this watch',
      price: 299.00,
      image: 'https://classiquewatches.com/cdn/shop/files/18-89G-XGWR.png?v=1730776002',
      category: 'Vintage',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

    return matchesSearch && matchesPrice && matchesCategory;
  });
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <option value="Bracelet">Bracelet</option>
            <option value="Vintage">Vintage</option>
          </select>
        </div>
  
        {/* Product List */}
        <div className="product-list">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
  
       
        <nav aria-label="Page navigation">
          <MDBPagination className="mb-0 justify-content-center">
            <MDBPaginationItem disabled={currentPage === 1}>
              <MDBPaginationLink
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </MDBPaginationLink>
            </MDBPaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <MDBPaginationItem
                key={index + 1}
                active={currentPage === index + 1}
              >
                <MDBPaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </MDBPaginationLink>
              </MDBPaginationItem>
            ))}
            <MDBPaginationItem disabled={currentPage === totalPages}>
              <MDBPaginationLink
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
      </div>
    </>
  );
  
};

export default ProductList;
