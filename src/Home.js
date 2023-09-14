import React from 'react';
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpeg'
import image1 from './images/Image1.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <div className="container-fluid  text-white ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/">Talia Mega Beauty Shop</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cart">
            <i class="fas fa-shopping-cart"></i> Cart
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

     
  




  <div id="imageSlider" class="carousel slide bg-dark" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#imageSlider" data-slide-to="0" class="active"></li>
      <li data-target="#imageSlider" data-slide-to="1"></li>
      <li data-target="#imageSlider" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={image1}class="d-block w-100 h-25" alt="Image 1"></img>
      </div>
      <div class="carousel-item">
        <img src={image2} class="d-block w-100 h-25" alt="Image 1"></img>
      </div>
      <div class="carousel-item">
        <img src={image3} class="d-block w-100 h-25" alt="Image 3"></img>
      </div>
    </div>
    <a class="carousel-control-prev" href="#imageSlider" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#imageSlider" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>


 







<section class="hero bg-dark mt-3">
  <div class="container ">
    <div class="row">
      <div class="col-lg-6">
        <h1>Welcome to Talia Mega Beauty Shop</h1>
        <p>
          Discover the world of beauty and transformation with our exceptional products and services.
        </p>
        <a href="/products" class="btn btn-primary">Explore Products</a>
        <a href="/services" class="btn btn-secondary">Our Services</a>
      </div>
      <div class="col-lg-6">
        {/* <!-- Featured Product or Service Image --> */}
        <img src={image2} alt="Featured Product" class="img-fluid"></img>
      </div>
    </div>
  </div>
</section>

      







<section id="about" class="mt-3 py-5 bg-dark">
  <div class="container">
    <div class="row ">
      <div class="col-lg-6">
        <h2>About Us</h2>
        <p>
          Welcome to Talia Mega Beauty Shop, your trusted destination for all things beauty and wellness. We are passionate about enhancing your natural beauty and helping you feel confident in your own skin.
        </p>
        <p>
          Our mission is to provide high-quality beauty products and top-notch services that cater to your unique needs. Whether you're looking for skincare solutions, haircare expertise, makeup transformations, or spa relaxation, we've got you covered.
        </p>
      </div>
      <div class="col-lg-6">
        {/* <!-- Image or Visual Representation of Your Business --> */}
        <img src={image2} alt="About Us" class="img-fluid rounded-circle"></img>
      </div>
    </div>
  </div>
</section>

     






<section id="products">
  <div class="bg-light">
    <h2 class="text-center text-dark">Our Products</h2>
    <div class="row">    
         
    <div class="col-lg-2 col-md-6 mb-1">
        <div class="card bg-dark">
          <img src={image2} alt="Product 1" class="card-img-top"></img>

          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Description of Product 1.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 mb-1">
        <div class="card bg-dark">
          <img src={image2} alt="Product 1" class="card-img-top"></img>

          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Description of Product 1.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
   
      <div class="col-lg-2 col-md-6 mb-1">
        <div class="card bg-dark">
          <img src={image2} alt="Product 2" class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Product 2</h5>
            <p class="card-text">Description of Product 2.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 mb-1">
        <div class="card bg-dark">
          <img src={image2} alt="Product 1" class="card-img-top"></img>

          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Description of Product 1.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 mb-1">
        <div class="card bg-dark">
          <img src={image2} alt="Product 1" class="card-img-top"></img>

          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Description of Product 1.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
   
      <div class="col-lg-2 col-md-6 mb-1">
        <div class="card bg-dark">
          <img src={image2} alt="Product 2" class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Product 2</h5>
            <p class="card-text">Description of Product 2.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>









<section id="contact" class="bg-dark py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2>Contact Us</h2>
        <p>
          We're here to assist you with any inquiries or beauty-related questions you may have. Feel free to reach out to us through the following channels:
        </p>
        <ul>
          <li><i class="fas fa-envelope"></i> Email: <a href="mailto:info@taliamegabeauty.com">info@taliamegabeauty.com</a></li>
          <li><i class="fas fa-phone"></i> Phone: +123-456-7890</li>
          <li><i class="fas fa-map-marker-alt"></i> Address: 123 Beauty Street, Beautyville</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <h3>Send Us a Message</h3>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="Your Name" required></input>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="email" placeholder="Your Email" required></input>
          </div>
          <div class="form-group">
            <textarea class="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
</section>




      <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
          <span>&copy; 2023 Talia Mega Beauty Landing - Your Source for Beauty Excellence. All rights reserved.</span>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
