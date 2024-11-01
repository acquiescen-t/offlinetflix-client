import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

function ChangeCarouselSideDisplay() {
  var slideZero = document.getElementById("slide-zero")?.className;
  var slideOne = document.getElementById("slide-one")?.className;
  var slideTwo = document.getElementById("slide-two")?.className;

  var displayZero = document.getElementById("display-zero");
  var displayOne = document.getElementById("display-one");
  var displayTwo = document.getElementById("display-two");
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="row d-flex mb-5">
        <div className="col-8">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-gradient"></div>
                <img
                  src={hero1}
                  className="d-block w-100 slide-zero"
                  alt="..."
                />
                <div className="carousel-label text-uppercase carousel-caption d-none d-md-block">
                  <h5>John Wick</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-gradient"></div>
                <img src={hero2} className="d-block w-100" alt="..." />
                <div className="carousel-label text-uppercase carousel-caption d-none d-md-block">
                  <h5>Coherence</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-gradient"></div>
                <img src={hero3} className="d-block w-100" alt="..." />
                <div className="carousel-label text-uppercase carousel-caption d-none d-md-block">
                  <h5>Don't Look Up</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="carousel-description col-3 mt-4 ms-2">
          <h1>Don't Look Up</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
