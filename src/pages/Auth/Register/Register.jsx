import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox,
  } from 'mdb-react-ui-kit';
  import { useDispatch } from 'react-redux';
  import { register } from '../../../features/auth/authSlice';
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  import { toast, ToastContainer } from 'react-toastify';
  import { useNavigate } from 'react-router-dom'; 
  import './Register.css';
  
  const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      }),
      onSubmit: (values, { resetForm }) => {
        try {
          dispatch(register(values)); 
          toast.success('Registration successful!');
          resetForm(); 
          navigate('/product'); 
        } catch (error) {
          toast.error(`Registration failed. Please try again. ${error.message}`); 
        }
      },
    });
  
    return (
      <>
        <ToastContainer />
        <MDBContainer fluid className="my-5">
          <MDBRow className="g-0 align-items-center">
            <MDBCol col="6">
              <MDBCard
                className="my-5 cascading-right"
                style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}
              >
                <MDBCardBody className="p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form onSubmit={formik.handleSubmit}>
                    {/* Name Input */}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Name"
                      id="name"
                      type="text"
                      {...formik.getFieldProps('name')}
                      className={formik.touched.name && formik.errors.name ? 'is-invalid' : ''}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-danger">{formik.errors.name}</div>
                    )}
  
                    {/* Email Input */}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                      className={formik.touched.email && formik.errors.email ? 'is-invalid' : ''}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
  
                    {/* Password Input */}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="password"
                      type="password"
                      {...formik.getFieldProps('password')}
                      className={formik.touched.password && formik.errors.password ? 'is-invalid' : ''}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-danger">{formik.errors.password}</div>
                    )}
  
                    {/* Checkbox */}
                    <div className="d-flex justify-content-center mb-4">
                      <MDBCheckbox name="subscribe" id="subscribe" label="Subscribe to our newsletter" />
                    </div>
  
                    {/* Submit Button */}
                    <MDBBtn className="w-100 mb-4" size="md" type="submit">
                      Register
                    </MDBBtn>
                  </form>
  
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
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
  
            <MDBCol col="6">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="rounded-4 shadow-4 img-fluid"
                alt="Sample"
                style={{ width: '100%', height: '600px' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  };
  
  export default Register;
  