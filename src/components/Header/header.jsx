import { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBBadge,
  MDBIcon,
  MDBCollapse,
  MDBNavbarItem
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalItems);
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <MDBNavbar light bgColor="light" expand="lg" className="sticky-navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <img
            src="/src/assets/e-com.png"
            height="70"
            alt="Logo"
            loading="lazy"
          />
        </MDBNavbarBrand>
        
        <MDBNavbarItem className="d-flex ml-auto mb-3">
          <MDBNavbarLink onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            <MDBBadge pill color="danger">
              {cartItemCount || '!'}
            </MDBBadge>
            <span>
              <MDBIcon fas icon="shopping-cart" />
            </span>
          </MDBNavbarLink>
        </MDBNavbarItem>

        {/* Navbar toggler button */}
        <MDBNavbarToggler
          type="button"
          
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon className='header-MDBNavbarToggler' icon="bars" fas />
        </MDBNavbarToggler>
        
        {/* Collapse for navigation items */}
        <MDBCollapse navbar open={openNav} style={{fontSize:'15px'}}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={currentPath === '/'}
                aria-current="page"
                href="/"
                className={currentPath === '/' ? 'active' : ''}
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/products"
                className={currentPath === '/products' ? 'active' : ''}
              >
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/cart"
                className={currentPath === '/cart' ? 'active' : ''}
              >
                Cart
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        {/* Separate container for shopping cart icon, always on the right */}
        
      </MDBContainer>
      
    </MDBNavbar>
  );
}

export default Header;
