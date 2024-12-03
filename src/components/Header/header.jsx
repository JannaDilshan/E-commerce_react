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
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { logout } from '../../features/auth/authSlice';
import './header.css';
function Header() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user); // Get user from Redux state

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalItems);
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/'); 
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
        <div className="header-drop-down">
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

          <MDBNavbarItem className="d-flex LoginPerson mb-3 ml-3">
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link" role="button">
                <MDBIcon far icon="user-circle" size="2x" />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                {user ? (
                  <>
                    <MDBDropdownItem link>{user.email}</MDBDropdownItem>
                    <MDBDropdownItem link onClick={handleLogout}>Logout</MDBDropdownItem>
                  </>
                ) : (
                  <MDBDropdownItem link onClick={() => navigate('/login')}>Login</MDBDropdownItem>
                )}
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </div>

       
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon className="header-MDBNavbarToggler" icon="bars" fas />
        </MDBNavbarToggler>

        
        <MDBCollapse navbar open={openNav} style={{ fontSize: '15px' }}>
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
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
