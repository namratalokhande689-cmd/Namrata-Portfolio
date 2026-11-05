import Carousel from "react-bootstrap/Carousel";
import grocery12 from "../assets/grocery12.jpg";
import grocery13 from "../assets/grocery13.jpg";
import grocery14 from "../assets/grocery14.jpg";

function HeroFullSlide() {
  return (
    <Carousel interval={3000}>

      {/* First Image */}
      <Carousel.Item>
        <img
          src={grocery12}
          alt="Organic eggs"
          className="w-100"
        />

       <Carousel.Caption className="text-start" >
  <p className="mb-2">
    🥝 Only Natural Incredient
  </p>

  <h1 className="fw-bold">
    Enjoying Refreshing
    <br />
    Summer Drink
  </h1>

  <button className="btn btn-light rounded-pill px-4 mt-3">
    Shop now
  </button>
</Carousel.Caption>
      </Carousel.Item>


      {/* Second Image */}
      <Carousel.Item>
        <img
          src={grocery13}
          alt="Fresh vegetables"
          className="w-100"
        />

        <Carousel.Caption className="text-start">
          <p className="mb-2">
              Free shiping - order over 50$</p>

            <h1 className="fw-bold">Healthy food 
                <br />Available to
                <br />Everyone</h1>

         <button className="btn btn-light rounded-pill px-4 mt-3">
    Shop now
  </button>
        </Carousel.Caption>
      </Carousel.Item>


      {/* Third Image */}
      <Carousel.Item>
        <img
          src={grocery14}
          alt="Fresh fruits"
          className="w-100"
        />

        <Carousel.Caption className="text-start">
           <p className="mb-2"> 🥚 Organic Product to Your Table</p>

           <h1 className="fw-bold">Organic eggs from 
            <br />home-grown
            <br />Chicken</h1>

          <button className="btn btn-light rounded-pill px-4 mt-3">
          Shop now
         </button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default HeroFullSlide;