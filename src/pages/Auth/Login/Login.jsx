import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast, ToastContainer } from 'react-toastify';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { login } from '../../../features/auth/authSlice'; 
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      await dispatch(login({ email, password }));
      toast.success(`Welcome back, ${email}!`);
      setTimeout(() => {
        navigate('/');
      }, 2000); 

      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error(error.message ? `Error: ${error.message}` : 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <MDBContainer fluid className="p-3 my-3">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/950/726/427/clock-detail-jewelry-luxury-wallpaper-preview.jpg"
              className="img-fluid"
              alt="Phone"
            />
          </MDBCol>

          <MDBCol col="4" md="6">

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3 className="fw-bold mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
                Log in
              </h3>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLgEmail"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLgPassword"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="Remember me" />
                  <a href="#!">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don&apos;t have an account? <a href="/register" className="link-danger">Register</a></p>
              </form>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
              </div>

              <div className="text-center">
                    <p>or sign up with:</p>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>
                  </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
