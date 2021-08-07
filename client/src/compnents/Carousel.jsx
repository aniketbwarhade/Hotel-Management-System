import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import hotel from "../images/hotel.jpg"
import poolside from "../images/poolside.jpg"
import restaurant from "../images/restaurant.jpg"
import room from "../images/room.jpg"
import terrace from "../images/terrace.jpg"
import "./Carsel.css";
import {Link} from 'react-router-dom';
function Carsel(){
    return(
        <Carousel className="carousel__slider ">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={hotel}
      alt="First slide"
      height="600px"
    />
    <Carousel.Caption>
      <h3>Welcome to our Website</h3>
      <Link to='/Booking'>
        <Button variant="outline-light" >Book a Room!</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={room}
      alt="Second slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Our Rooms</h3>
      
      <Link to='/Booking'>
        <Button variant="outline-light" >Book a Room!</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={restaurant}
      alt="Third slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Canteen Room</h3>
      <Link to='/Booking'>
        <Button variant="outline-light" >Book a Room!</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={poolside}
      alt="fourth slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>pool Side</h3>
      <Link to='/Booking'>
        <Button variant="outline-light" >Book a Room!</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={terrace}
      alt="fifth slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Terrace </h3>
      <Link to='/Booking'>
        <Button variant="outline-light" >Book a Room!</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default Carsel;