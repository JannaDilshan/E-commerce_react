import HomeProductList from "../../components/HomeProduct/Home-ProductList";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <MDBRow className="w-100">
        <MDBCol md="6">
          <img
            src="https://ucarecdn.com/d7176bc3-33ee-4e6f-b514-e279c3395b90/-/format/auto/-/preview/3000x3000/-/quality/lighter/Screenshot%202024-11-13%20at%2012.37.57%E2%80%AFPM.png"
            className="d-block w-100 hero-Img"
            alt="..."
          />
        </MDBCol>
        <MDBCol md="5">
          <div className="hero-container">
            <h1 className="hero-FirstTitle">
              The Elegance Collection <br />A Timeless Classic
            </h1>{" "}
            <br />
            <p className="hero-FirstDis">
              Classique offers stylish and luxurious watches made with Swiss
              movements and high-quality materials. Choose from our beautiful
              dress watches, available with or without sparkling diamonds, to
              match any style and taste
            </p>
            <a href="/products" className="hero-cta-button">
              Shop Now
            </a>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="w-100 second-grid">
        <MDBCol md="3">
          <img
            src="https://ucarecdn.com/956bc789-d5c8-4f9c-9797-de76e44917e6/-/format/auto/-/preview/3000x3000/-/quality/lighter/28-89G-28-84R-31-01W-BANNER.jpg"
            className="w-100"
            alt=""
          />
        </MDBCol>
        <MDBCol md="6">
          <h1>VINTAGE DROP 5</h1>
          <h2>Shop the Collection</h2>
          <p style={{ padding: "40px", textAlign: "center" }}>
            This collection includes watches from the Classique Watches Archive.
            Each watch has been fitted with a new battery, offering the
            reliability and quality of a brand-new watch, along with the charm
            of vintage design
          </p>
          <a href="/products?category=Vintage" className="hero-cta-button">
              Shop Now
            </a>
        </MDBCol>
        <MDBCol md="3">
          <img
            src="https://classiquewatches.com/cdn/shop/files/8471G-QN_main.png?v=1732511947"
            className="w-100"
            alt=""
          />
        </MDBCol>
      </MDBRow>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://t4.ftcdn.net/jpg/08/11/15/35/360_F_811153575_lMjrbQdLXzP7seIWcK148VGZOPuREznn.jpg"
            className="d-block w-100 custom-height"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "10px",
                borderRadius: "5px",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              Diver
            </h5>
            <p
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "5px",
                borderRadius: "5px",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <a href="/products?category=Diver" className="hero-cta-button">
              Shop Now
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2024/03/How-to-set-a-watch-Banner.jpg"
            className="d-block w-100 custom-height"
            alt="..."
          />

          <MDBCarouselCaption>
            <h5
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "10px",
                borderRadius: "5px",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              Classic
            </h5>
            <p
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "5px",
                borderRadius: "5px",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="/products?category=Classic" className="hero-cta-button">
              Shop Now
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://www.watchgecko.com/cdn/shop/articles/BANNER-Ocean-Scout-Ice-and-Frost_e2754800-10bd-4f32-a24b-8c084a21922c_1100x.jpg?v=1704441601"
            className="d-block w-100 custom-height"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "10px",
                borderRadius: "5px",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              Modern
            </h5>
            <p
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "5px",
                borderRadius: "5px",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="/products?category=Modern" className="hero-cta-button">
              Shop Now
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Watch Shop</h1>
          <p>
            Discover luxury and classic timepieces crafted with precision and
            elegance.
          </p>
          <a href="/products" className="cta-button">
            Shop Now
          </a>
        </div>
      </div>

      {/* Featured Product Section */}
      <section className="featured-section">
        <h2 className="section-title">Our Exclusive Watch Collection</h2>
        <p className="section-description">
          Timeless designs, unparalleled craftsmanship, and a commitment to
          excellence.
        </p>
        <HomeProductList />
      </section>
    </div>
  );
}

export default Home;
