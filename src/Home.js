import image2 from './images/Gek.jpg'
import image3 from './images/spaboy.jpg'
import image1 from './images/Image1.jpeg'
import bodyscrubs from "./images/bodyscrubs.jpg"
import cocoabutter from './images/cocoabutter.jpg'
import collagen from './images/collagen.jpg'
import collagenfacialserem from './images/collagenfacialserem.jpg'
import talia from './images/talia.jpg'
import combs from './images/Combs.jpg'
import gek from "./images/Gek.jpg"
import organicrice from './images/organicrice.jpg'
import rose from './images/Rose.jpg'
import spaboy from './images/spaboy.jpg'
import vitamine from './images/vitamine.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import whatsapp from './images/whatsapp.png'
import React, { useState } from 'react';
function Home() {
    const [showFullText, setShowFullText] = useState(false);

    const fullText = `
    1. Introduction:
    - Welcome to Talia Mega Beauty Landing, your ultimate destination for all things beauty along Dubious Road.
    - Discover an unparalleled beauty experience as we unveil a world of transformative products and services.
    - Talia Mega Beauty Landing is dedicated to empowering individuals to embrace their unique beauty and unlock their full potential.

    2. About Us:
    - Talia Mega Beauty Landing is a leading beauty destination, situated along Dubious Road, known for its exceptional quality and diverse range of offerings.
    - Our team of skilled beauty professionals is committed to providing personalized beauty solutions tailored to your individual needs.
    - With a carefully curated selection of renowned beauty brands and cutting-edge treatments, we strive to exceed your expectations.

    3. Our Services:
    - Explore our comprehensive range of beauty services, including:
      - Skincare: Experience rejuvenating facials, personalized skin consultations, and advanced treatments for a radiant complexion.
      - Haircare: Transform your locks with expert hairstyling, coloring, and innovative hair treatments.
      - Makeup: Enhance your natural beauty with professional makeup applications, bridal makeup services, and makeup tutorials.
      - Nail Care: Indulge in luxurious manicures, pedicures, and nail art, performed by skilled technicians.
      - Spa Treatments: Relax and unwind with a variety of spa treatments, such as massages, body wraps, and aromatherapy.
      - Wellness: Embrace holistic wellness with yoga classes, meditation sessions, and wellness workshops.

    4. Our Products:
    - Discover a treasure trove of beauty products from renowned brands, carefully selected to cater to your diverse needs.
    - From skincare essentials and makeup must-haves to haircare gems and fragrance delights, we offer a wide range of products to enhance your beauty routine.
    - Our knowledgeable beauty advisors are available to assist you in finding the perfect products that align with your preferences and goals.

    5. Exclusive Offers and Promotions:
    - At Talia Mega Beauty Landing, we believe in making beauty accessible to all. Stay tuned for our exclusive offers, promotions, and loyalty programs designed to reward our valued customers.
    - Enjoy special discounts, gift with purchase options, and seasonal promotions to elevate your beauty experience without breaking the bank.

    6. Contact Us:
    - We are conveniently located along Dubious Road, easily accessible from the surrounding areas.
    - Reach out to our friendly customer service team for inquiries, appointments, or any beauty-related questions.
    - Stay connected with Talia Mega Beauty Landing through our website, social media channels, and newsletter to be the first to know about our latest updates and offerings.

    Experience the epitome of beauty at Talia Mega Beauty Landing along Dubious Road. Unleash your inner radiance and embark on a transformative beauty journey like no other.
  `;

  const paragraphs = fullText.split('\n\n').map((paragraph, index) => (
    <p className="mb-4" key={index}>
      {paragraph}
    </p>
  ));

  const displayText = showFullText
    ? paragraphs
    : paragraphs.slice(0, 2); 
  
    // Function to toggle between full and shortened text
    const toggleReadMore = () => {
      setShowFullText(!showFullText);
    };
  return (
    
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light  bg-light fixed-top ">
            <div className="container">
                <a className="navbar-brand text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#home">Talia Mega Beauty Shop</a>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#products">Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long" href="#cart" >
                        <i className="fas fa-shopping-cart"></i> Cart
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

     
  




 <div className='bg-light container'>
 <div id="imageSlider" className="w-100 carousel slide bg-light" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#imageSlider" data-slide-to="0" className="active"></li>
    <li data-target="#imageSlider" data-slide-to="1"></li>
    <li data-target="#imageSlider" data-slide-to="2"></li>
    <li data-target="#imageSlider" data-slide-to="3"></li>
    <li data-target="#imageSlider" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100 h-100 m-auto" alt="text" />
      <div className="carousel-caption">
        <h3 className='hero_title text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-purple'> Welcome to Talia Mega Beauty Landing, your ultimate destination for all things beauty along Dubious Road. - Discover an unparalleled beauty experience as we unveil a world of transformative products and services.</h3>
       
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100 h-100 m-auto" alt="text" />
      <div className="carousel-caption">
        <h3 className='hero_title text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-purple'>Our mission is to provide high-quality beauty products and top-notch services</h3>
       
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100 h-100 m-auto" alt="text 3" />
      <div className="carousel-caption">
        <h3 className='hero_title text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-purple'>Our team of skilled beauty professionals is committed to providing personalized beauty solutions tailored to your individual needs. - With a carefully curated selection of renowned beauty brands and cutting-edge treatments, we strive to exceed your expectations. </h3>

      </div>
    </div>
    <div className="carousel-item">
      <img src={vitamine} className="d-block w-100 h-100 m-auto" alt="text 4" />
      <div className="carousel-caption">
        <h3 className='hero_title text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-purple'>We're here to assist you with any inquiries or beauty-related questions you may have</h3>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={talia} className="d-block w-100 h-100 m-auto" alt="text 5" />
      <div className="carousel-caption">
        <h3 className='hero_title text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-purple'>Experience the epitome of beauty at Talia Mega Beauty Landing along Dubious Road. Unleash your inner radiance and embark on a transformative beauty journey like no other.Your Source for Beauty Excellence. </h3>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#imageSlider" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon text-light" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#imageSlider" role="button" data-slide="next">
    <span className="carousel-control-next-icon text-light" ariahidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



 




<div className='container bg-purple text-light m-auto'>
  <section className="hero bg-purple mt-3" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long'>Welcome to Talia Mega Beauty Shop</h4>
            <p className='text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long'>
              {displayText}
              <button onClick={toggleReadMore} className="btn btn-link text-light">{showFullText ? 'Read Less' : 'Read More'}</button>
            </p>
            <a href="/products" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-secondary mr-2">Explore Products</a>
            <a href="/services" className="btn text-light btn-dark">Our Services</a>
          </div>
          <div className="col-lg-6 d-none">
            {/* Featured Product or Service Image */}
            <img src={image2} alt="Featured Product" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>   


<section id="about" className="mt-3 py-5 bg-purple">
  <div className="container">
    <div className="row ">
      <div className="col-lg-6">
        <h2 className='text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long'>About Us</h2>
        <p className='text-light'>
          Welcome to Talia Mega Beauty Shop, your trusted destination for all things beauty and wellness. We are passionate about enhancing your natural beauty and helping you feel confident in your own skin.
        </p>
        <p className='text-light'>
          Our mission is to provide high-quality beauty products and top-notch services that cater to your unique needs. Whether you're looking for skincare solutions, haircare expertise, makeup transformations, or spa relaxation, we've got you covered.
        </p>
      </div>
      <div className="col-lg-6">
         <img src={image2} alt="About Us" className="img-fluid rounded-3"></img>
      </div>
    </div>
  </div>
</section>

     
<section id="products">
  <div className="bg-light">
    <h2 className="text-center text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Our Products</h2>    
    
    <div className='container'>
      <div className='card-check'>
      <div className="row">             
    <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={image2} alt="Product 1" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Body Scrubs</h5>            
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={organicrice} alt="organirice" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Organic Rice</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div> 
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={cocoabutter} alt="cocoabutter" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Cocoabutter</h5>            
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
   
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={collagen} alt="collagen" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Collagen</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={collagenfacialserem} alt="collagenfacialserem" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Combs</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={bodyscrubs} alt="bodyscrubs" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Body scrubs</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={combs} alt="combs" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Combs</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={rose} alt="rose" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Rose</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={rose} alt="rose" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Rose</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={spaboy} alt="spaboy" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Spa Boy</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={gek} alt="gek" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Geks</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div>
   
      <div className="col-lg-3 col-md-6 mb-1">
        <div className="card bg-purple">
          <img src={organicrice} alt="organirice" className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">Organic Rice</h5>
            <a href="/" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">View Details</a>
          </div>
        </div>
      </div> 
      </div>     
    </div>
      </div>
     
    <div>     
    
    <img src={whatsapp} alt="whatsapp" className='whatsapp-popup bg-light rounded-circle'/> Open WhatsApp

    </div>
  </div>
</section>









<section id="contact" className="bg-purple py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h2 className='text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long'>Contact Us</h2>
        <p className='text-light'>
          We're here to assist you with any inquiries or beauty-related questions you may have. Feel free to reach out to us through the following channels:
        </p>
        <ul>
          <li className='text-light'><i className="text-light fas fa-envelope"></i> Email :<a href="mailto:mainaantony19@gmail.com">info.taliamega.co.ke</a></li>
          <li className='text-light'><i className="text-light fas fa-phone"></i> Contact no +254722445567
</li>
          <li className='text-light'><i className=" text-light fas fa-map-marker-alt"></i> Address: 123 Dubious Street, Nairobi</li>
        </ul>
      </div>
      <div className="col-lg-6 ">
        <div className='border-light'>

        <h3 className='fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long'>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Your Name" required></input>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Your Email" required></input>
          </div>
          <div className="form-group">
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn text-light fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long bg-dark">Send</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>




      <div className="container-fluid bg-purple text-light py-4">
        <div className="container text-center fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">
          <span>&copy; 2023 Talia Mega Beauty Landing - Your Source for Beauty Excellence. All rights reserved.</span>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
  
}
const openWhatsAppPopup = () => {
  document.querySelector('.whatsapp-popup').style.display = 'block';
};
export default Home;
