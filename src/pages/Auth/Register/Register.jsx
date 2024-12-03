import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { register } from "../../../features/auth/authSlice"; // Adjust path if needed
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    
    onSubmit: (values, { resetForm }) => {
      try {
        dispatch(register(values));
        toast.success("Registration successful!");
        setTimeout(() => {
        resetForm();
        navigate("/");
      }, 2000);
      } catch (error) {
        toast.error(`Registration failed. Please try again. ${error.message}`);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            zIndex: "9",
            position: "relative",
            fontWeight: "bold",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: "10px",
            borderRadius: "5px",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          Sign up now
        </h1>
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
             Join the Watch <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
              Enthusiast Community
              </span>
            </h1>
            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Unlock a world of premium watches and exclusive offers by joining our community! Register today to receive personalized recommendations, early access to new collections, special promotions, and much more. Be the first to know about limited-edition releases and exclusive discounts tailored just for you. Whether you’re a seasoned collector or a first-time buyer, our registration is the key to elevating your watch experience.
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass registation-form-input ">
              <MDBCardBody className="p-5 registation-form-input ">
                <form
                  onSubmit={formik.handleSubmit}
                  className="registation-form-input-feild "
                >
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="firstName"
                        type="text"
                        {...formik.getFieldProps("firstName")}
                        className={
                          formik.touched.firstName && formik.errors.firstName
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="text-danger">
                          {formik.errors.firstName}
                        </div>
                      )}
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="lastName"
                        type="text"
                        {...formik.getFieldProps("lastName")}
                        className={
                          formik.touched.lastName && formik.errors.lastName
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="text-danger">
                          {formik.errors.lastName}
                        </div>
                      )}
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    className={
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    {...formik.getFieldProps("password")}
                    className={
                      formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                  )}

                  <MDBBtn className="w-100 mb-4" size="md" type="submit">
                    Sign up
                  </MDBBtn>
                </form>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;
