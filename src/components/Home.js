import React from "react";
import {Card, Container, Row, Modal, Carousel, Form, Button}from 'react-bootstrap';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "../images/Hero.jpg";
import BigGroupSit from "../images/BigGroupSit.jpg";
import Moon from "../images/Moon.gif";
import WarriorOne from "../images/WarriorOne.jpg";
import BreeCBio from "../images/BreeCBio.jpg";
import BreeCbg from "../images/BreeCbg.jpg";
import BreeMBio from "../images/BreeMBio.jpg";
import BreeMbg from "../images/BreeMbg.jpg";
import YogaSoundbg from "../images/YogaSoundbg.jpg";
import Privatebg from "../images/Privatebg.jpg";
import Workshopsbg from "../images/Workshopsbg.jpg";
import Moonbg from "../images/Moonbg.jpg";
import Originbg from "../images/Originbg.jpg";


function Home() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 3000, // Set auto scroll speed to 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 3000, // Set auto scroll speed to 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
    {/* <!-- Hero --> /} */}
<div class=" text-center bg-image rounded-3" style={{
    backgroundImage: 'url('+ Hero +')',
    backgroundSize: "cover",
    height: "900px"
  }}>
  <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.0)", height: "900px"}}>
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-white" style={{paddingTop: "200px"}}>
        <h1 class="mb-3" style={{fontSize: "50px", fontFamily: "Prata"}}>Yoga and Sound Healing</h1>
        <h4 class="mb-3" style={{fontSize: "26px", fontFamily: "Prata"}}>Come join me and experience the healing of sound and yoga</h4>

        <a class="btn btn-outline-light btn-lg" style={{fontFamily:"Prata"}} href="https://app.acuityscheduling.com/schedule.php?owner=30563286&appointmentType=category:Yoga%20%2B%20Sound%20Events" role="button">Book Now</a>

      </div>
    </div>
  </div>
</div>

<section id="yogaSound"  style={{backgroundColor: '#fff6ea', paddingBottom: ''}}>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="" style={{
          backgroundColor: '#fff6ea',
          height: '400px'
        }}>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid reveal">
    {/* <!-- Card for text and image --> */}
    <div class="row">
      <div class="col-lg-12">
        <div class="" style={{
          marginTop: "-250px",
          background: `linear-gradient(rgba(255, 246, 234, 1), rgba(255, 246, 234, .8) 20%, rgba(255, 246, 234, .8) 80%, rgba(255, 246, 234, 1)) top center no-repeat, url(${YogaSoundbg})`,
          backdropFilter: "blur(30px)",
          backgroundSize: "cover"
        }}>
          <div class="card-body">
            <div class="row">
              {/* <!-- Column for image on the left --> */}
              <div class="col-md-6">
                <img src={BigGroupSit} style={{maxWidth: '100%', maxHeight: '600px', borderRadius: '250px'}}></img>
              </div>
              {/* <!-- Column for text on the right --> */}
              <div class="col-md-5">
                <h1 class="fw-bold mb-5 py-5" style={{fontSize:"45px", fontFamily: 'Prata'}}>Yoga & Sound Experience!</h1>
                  <p style={{textAlign: "left", fontSize:"26px", fontFamily: 'Prata'}}>Bree C guides you through a gentle and mindful, 30-minute yoga flow. Perfect for beginners or experienced yogis looking to relieve tension/stress.
                  Bree M creates vibrational frequencies with crystal sound bowls and guides a 30-minute meditation to promote healing, stress reduction, and energetic balance.
                  <br></br>
                  <br></br>
                  <center><a class="btn btn-outline-dark btn-lg" style={{fontSize:"22px"}} href="https://app.acuityscheduling.com/schedule.php?owner=30563286&appointmentType=category:Yoga%20%2B%20Sound%20Events" role="button">Book Now</a></center>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="eventPrivate" class="text-center" style={{backgroundColor: '#fff6ea', paddingBottom: '150px', paddingTop: "100px"}}>
    <div class="card-body py-5">

      <div class="" style={{
          marginTop: "",
          background: `linear-gradient(rgba(255, 246, 234, 1), rgba(255, 246, 234, .4) 20%, rgba(255, 246, 234, .4) 80%, rgba(255, 246, 234, 1)) top center no-repeat, url(${Privatebg})`,
          backdropFilter: "blur(30px)",
          backgroundSize: "cover"
        }}>
          <h2 class="fw-bold mb-5" style={{fontFamily: 'Prata'}}>Private Events</h2>
          <p style={{fontFamily: 'Prata', fontSize:"24px"}}> Customize the Yoga & Sound Experience for your next corporate or private event.</p>

          {/* Carousel inside the card */}
          <div className="container text-center my-3">
      <Slider {...settings}>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://media.istockphoto.com/id/1322842973/photo/diverse-business-people-putting-their-hands-together-in-cirle.jpg?s=612x612&w=0&k=20&c=9BAYCv8tAsgYPQdTsFxLzLJsmt6tGYE5Etwd63OccxQ=" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Team Building</div>
              <div className="description">Enhance team bonding with our tailored Yoga & Sound Experience for team building events.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://media.istockphoto.com/id/609072850/photo/shes-bringing-some-of-her-bright-ideas-to-the-front.jpg?s=612x612&w=0&k=20&c=w3ITNv_rwk8ET0H272kCrAUf2kc9kRmen3mvbmDUGqo=" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Leadership Events</div>
              <div className="description">Foster leadership skills and mindfulness in leadership events with our unique experience.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://thumbs.dreamstime.com/b/wellness-wellbeing-health-healthy-lifestyle-concept-72002474.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Wellness Conferences</div>
              <div className="description">Elevate wellness conferences with our unique blend of yoga, sound, and meditation sessions.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://berkscountyliving.com/downloads/18196/download/iStock-918933880.jpg?cb=1155e4a7652ab617e102986ad35ab972" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Birthday Parties</div>
              <div className="description">Celebrate birthdays with a special Yoga + Sound Experience that adds joy and relaxation to the occasion.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2023/02/girls-night-in-ideas.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Girls Night In</div>
              <div className="description">Create unforgettable memories with your friends during a relaxing and fun Girls Night In event.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://www.booksurfcamps.com/static/files/images/ir/nt/it/hk/content.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Beach Parties</div>
              <div className="description">Enjoy the soothing sounds of yoga and crystal bowls at beach parties for a unique and memorable experience.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://bunniesbythebay.com/cdn/shop/articles/Baby_Shower_lifestyle-websize_1024x.jpg?v=1620627090" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Baby Showers</div>
              <div className="description">Celebrate the upcoming arrival of a new life with a peaceful and rejuvenating Yoga & Sound Experience.</div>
            </div>
          </div>
        </div>
        </div>
      </Slider>
    </div>
          
          
    <center><a class="btn btn-outline-dark btn-lg mt-4" style={{fontSize:"22px", fontFamily:"Prata"}} href="https://app.acuityscheduling.com/schedule.php?owner=30563286&appointmentType=category:Corporate%20%2B%20Private%20Events" role="button">Book Now</a></center>        
      </div>
    </div>
</section>

<section id="eventMoon" class="text-center" style={{backgroundColor: '#fff6ea', paddingBottom: '50px'}}>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="" style={{
          backgroundColor: '#fff6ea',
          height: '200px'
        }}>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid reveal">
    {/* {/* <!-- Card for text and image --> /} */}
    <div class="row">
      <div class="col-lg-12">
        <div class="py-5" style={{
          marginTop: "-250px",
          background: `linear-gradient(rgba(255, 246, 234, 1), rgba(255, 246, 234, 0.8) 20%, rgba(255, 246, 234, 0.8) 80%, rgba(255, 246, 234, 1)) top center no-repeat, url(${Moonbg})`,
          backdropFilter: "blur(30px)",
        }}>
          <div class="card-body">
            <div class="row">
              {/* {/ <!-- Column for text on the left --> /} */}
              <div class="col-md-6">
                <h1 style={{fontFamily: 'Prata', fontSize: "45px"}} class="fw-bold mb-5 py-5">Moon Events</h1>
                <p style={{fontSize:"26px", fontFamily: 'Prata', textAlign: "left"}} class='ms-lg-5'> Yoga + Sound is a journey of self-discovery and inner peace using the energy of the Full Moon, 
                combining the therapeutic practice of yoga with the soothing vibrations of sound healing. 
                Release tension, clear your mind, and restore your natural equilibrium. 
                Full Moon Ritual immediately following class for those who would like to stay and partake in the magic.
                <br></br>
                <br></br>
                <center><a class="btn btn-outline-dark btn-lg" style={{fontSize:"22px"}} href="https://app.acuityscheduling.com/schedule.php?owner=30563286&appointmentType=category:Full%20%26%20New%20Moon%20Yoga%20%2B%20Sound%20Events" role="button">Book Now</a></center></p>
              </div>
              {/* {/ <!-- Column for image on the right --> */}
              <div class="col-md-6">
                <img src={Moon} style={{maxWidth: '100%', maxHeight: '600px'}}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="workshop"  style={{backgroundColor: '#fff6ea', paddingBottom: '100px'}}>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="" style={{
          backgroundColor: '#fff6ea',
          height: '300px'
        }}>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid reveal">
    {/* <!-- Card for text and image --> */}
    <div class="row">
      <div class="col-lg-12">
        <div class="" style={{
          marginTop: "-250px",
          background: `linear-gradient(rgba(255, 246, 234, 1), rgba(255, 246, 234, .9) 20%, rgba(255, 246, 234, .9) 80%, rgba(255, 246, 234, 1)) top center no-repeat, url(${Workshopsbg})`,
          backdropFilter: "blur(30px)",
          backgroundSize: "cover"
        }}>
          <div class="card-body">
            <div class="row">
              {/* <!-- Column for image on the left --> */}
              <div class="col-md-6">
                <img src={WarriorOne} style={{maxWidth: '100%', maxHeight: '600px', borderRadius: '250px'}}></img>
              </div>
              {/* <!-- Column for text on the right --> */}
              <div class="col-md-5">
                <h1 class="fw-bold mb-5 py-5" style={{fontSize:"45px", fontFamily: 'Prata'}}>Workshops & Retreats</h1>
                  <p style={{textAlign: "left", fontSize:"26px", fontFamily: 'Prata'}}>
                  Immerse yourself in the transformative journey of yoga and sound healing with our thoughtfully designed workshops and retreats!
                  Go deeper into these powerful practices, where support and profound learning go hand in hand.
                  <br></br>
                  <br></br>
                  <center><a class="btn btn-outline-dark btn-lg" style={{fontSize:"22px"}} href="https://app.acuityscheduling.com/schedule.php?owner=30563286&appointmentType=category:Workshop%20%2B%20Retreats" role="button">Book Now</a></center>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="mission" class="text-center" style={{backgroundImage: 'linear-gradient(to top, #90adc6, #fff6ea)', paddingBottom: '50px'}}>


    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
          <h2 class="fw-bold mb-5" style={{fontSize: "45px",  fontFamily: 'Prata'}}>Our Mission</h2>
          <p style={{fontSize: "26px",  fontFamily: 'Prata'}}> Our mission is to create a safe space for our community to experience the transformative power of yoga and sound healing. 
            Fusing these two practices offers a unique balance of Mind, Body, and Spirit.</p>
        </div>
      </div>
    </div>
</section>


<section id="testimonials" class="text-center" style={{backgroundColor: '#fff6ea', paddingBottom: '', paddingTop: ""}}>
    <div class="card-body">

      <div class="" style={{
          marginTop: "",
          background: `linear-gradient(rgba(144, 173, 198, 1), rgba(144, 173, 198, .8) 20%, rgba(255, 246, 234, .8) 80%, rgba(144, 173, 198, 1)) top center no-repeat, url(${Originbg})`,
          backdropFilter: "blur(30px)",
          backgroundSize: "cover"
        }}>
          <h2 class="fw-bold mb-5" style={{fontFamily: 'Prata'}}>Testimonials</h2>
          <p style={{fontFamily: 'Prata', fontSize:"24px"}}></p>

          {/* Carousel inside the card */}
          <div className="container text-center pb-5">
      <Slider {...settings1}>
    <div class="col-md-4 mb-5 mb-md-0">
      <h5 class="mb-3">Maria Smantha</h5>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>The yoga experience was truly invigorating, seamlessly weaving tranquility and strength through each pose. 
        A perfect fusion of mindful movement and serene ambiance left a lasting sense of rejuvenation and contentment.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <h5 class="mb-3">Lisa Cudrow</h5>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>The yoga session was a blissful journey, seamlessly intertwining breath and movement, 
        leaving me with a profound sense of calm and renewed energy.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <h5 class="mb-3">John Smith</h5>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>The yoga experience was a revelation, a serene escape that transcended the physical, 
        offering a profound sense of peace and centeredness that lingered long after the session ended.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
      </Slider>
    </div>
      </div>
    </div>
</section>

<section id="Origins" class="text-center" style={{background: `linear-gradient(rgba(144, 173, 198, 1), rgba(144, 173, 198, .8) 20%, rgba(255, 246, 234, .7) 90%, rgba(255, 246, 234, 1)) top center no-repeat, url(${Originbg})`, paddingBottom: '50px'}}>

<div class="card-body py-5">

  <div class="row d-flex justify-content-center">    
      <h2 class="fw-bold mb-5" style={{fontSize: "45px",  fontFamily: 'Prata', color: "black"}}>Origins</h2>
      <div class="col-lg-6" style={{textAlign: "left"}}>
      <div className="row">
        <p className="col-md-6" style={{fontSize: "22px",  fontFamily: 'Prata', color: "black", textAlign: "left"}}> Seven years ago, in the heart of Atlanta, a chance encounter at a wellness boutique brought us together. 
          It was there that we, Bree and Bree, discovered a mutual passion for yoga and meditation, as well as a shared dream to spread healing across the globe. 
          Our belief is firmly rooted in the inclusivity of wellness, welcoming individuals of all shapes, sizes, and mindsets. 
          We are committed to creating an environment where everyone feels accepted and can partake in the journey of healing, support, and unconditional love.
          This inclusive approach forms the cornerstone of our mission, ensuring that our space </p>
          <p className="col-md-6" style={{fontSize: "22px",  fontFamily: 'Prata', color: "black", textAlign: "left"}}>is a sanctuary for all who seek wellness and community.          
          Yoga and Sound is a collective experience where each session is a step towards self-discovery and communal connection. 
          Our yoga practices are designed to be accessible and empowering, celebrating the diversity and uniqueness of each individual. 
          Complementing this, our sound healing sessions offer a journey through immersive vibrations, facilitating deep emotional and mental healing. 
          This dual-instructor approach allows for a beautiful balance. Our teaching styles harmoniously blend to provide a more rounded, diverse, and enriching experience.
        </p>
        </div>
    </div>
  </div>
</div>
</section>

<section id="bioBreeC"  style={{backgroundColor: '#fff6ea', paddingBottom: '100px'}}>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="" style={{
          backgroundColor: '#fff6ea',
          height: '300px'
        }}>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid reveal">
    {/* <!-- Card for text and image --> */}
    <div class="row">
      <div class="col-lg-12">
        <div class="" style={{
                marginTop: "-250px",
                backgroundImage: `linear-gradient(to bottom, rgba(255, 246, 234, 1) 0%, rgba(255, 246, 234, .6) 50%, rgba(255, 246, 234, .6) 100%), url(${BreeCbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#fff6ea',
                backdropFilter: 'blur(30px)',
        }}>
          <div img="" class="card-body">
            <div class="row">
              {/* <!-- Column for image on the left --> */}
              <div class="col-md-6">
                <img src={BreeCBio} style={{maxWidth: '100%', maxHeight: '600px', marginTop: '100px'}}></img>
              </div>
              {/* <!-- Column for text on the right --> */}
              <div class="col-md-5">
                <h1 class="fw-bold mb-5 py-5" style={{fontSize:"45px", fontFamily: 'Prata'}}>Bree C</h1>
                  <p style={{textAlign: "left", fontSize:"24px", fontFamily: 'Prata'}}>
                  Hello, I'm Bree :) Holistic wellness coach, nutritionist, yoga and meditation instructor, and personal trainer. 
                  My approach to mental and physical healing is nurtured through balanced mindfulness, movement, breathing, rest, and proper nutrition. I teach techniques that guide you to:
                  <ul>
                    <li>Adopt sustainable, nourishing dietary habits that fuel both body and soul.</li>
                    <li>Deepen the connection with your inner self, cultivating mindfulness and self-awareness.</li>
                    <li>Balance your physical, emotional, and spiritual well-being through integrative practices.</li>
                  </ul>
                  Enjoy the harmonious, vibrant, and joyous things in life.
                  <br></br>
                  <br></br>
                  <center><a class="btn btn-outline-dark btn-lg instagram" style={{fontSize:"22x", color: 'white'}} href="https://www.instagram.com/br330na/" role="button">Follow me on <i className="fab fa-instagram"></i></a></center>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="bioBreeM" class="text-center" style={{backgroundColor: '#fff6ea', paddingBottom: '50px'}}>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="" style={{
          backgroundColor: '#fff6ea',
          height: '200px'
        }}>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid reveal">
    {/* {/* <!-- Card for text and image --> /} */}
    <div class="row">
      <div class="col-lg-12">
        <div class="py-5" style={{
          marginTop: "-250px",
          background: `linear-gradient(rgba(255, 246, 234, 1), rgba(255, 246, 234, 0) 20%, rgba(255, 246, 234, 0) 80%, rgba(255, 246, 234, 1)) top center no-repeat, url(${BreeMbg})`,
          backdropFilter: "blur(30px)",
          backgroundSize: "cover",
        }}>
          <div class="card-body">
            <div class="row">
              {/* {/ <!-- Column for text on the left --> /} */}
              <div class="col-md-6">
                <h1 style={{fontFamily: 'Prata', fontSize: "45px"}} class="fw-bold mb-5 py-5">Bree M</h1>
                <div className="row">
                <p className="col-md-5" style={{fontSize: "22px",  fontFamily: 'Prata', color: "black", textAlign: "left"}}> 
                    Hello, I’m Bree! A natural-born Empathic Clairvoyant, Tarot Reader, Sound Healing Practitioner, Reiki/Energy Healer, Meditation Guide, 
                    Certified Yoga Teacher for over 11 years mastered in methods/forms including Vinyasa, BUTI, YIN, Restorative, Kundalini and many more. 
                    For someone who can see and hear into the spirit world, I love helping people discover the answers they are seeking.
                    I’m known for my direct honesty, delivery, empathy, sense of humor and accuracy during my classes and 1:1 sessions. 
                </p> 
                <p className="col-md-6" style={{fontSize: "22px",  fontFamily: 'Prata', color: "black", textAlign: "left"}}>
                    
                    During your experience, I tune in and speak directly from the heart with pure authenticity & love with the guidance/downloads I receive. 
                    My life’s purpose is to help show people they are chosen for a unique calling and purpose as well through healing guidance techniques. 
                    And most importantly, to always hold a safe space for my students and clients to be seen, heard and understood throughout their journey.
                  <br></br>
                  <br></br>
                  <center><a class="btn btn-outline-dark btn-lg instagram" style={{fontSize:"22x", color: 'white'}} href="https://www.instagram.com/theyellowalchemist/" role="button">Follow me on <i className="fab fa-instagram"></i></a></center>
                  </p>
                </div>
              </div>
              {/* {/ <!-- Column for image on the right --> */}
              <div class="col-md-6">
                <img src={BreeMBio} style={{maxWidth: '100%', maxHeight: '700px'}}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>    
  );
}

export default Home;
