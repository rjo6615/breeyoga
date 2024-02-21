import React from "react";
import {Card, Container, Row, Modal, Carousel, Form, Button}from 'react-bootstrap';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "../images/Hero.jpg";
import BigGroupSit from "../images/BigGroupSit.jpg";

function Home() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

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

  return (
    <div>
    {/* <!-- Hero --> /} */}
<div class=" text-center bg-image rounded-3" style={{
    backgroundImage: 'url(' + Hero + ')',
    backgroundSize: "cover",
    height: "900px"
  }}>
  <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", height: "900px"}}>
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-white" style={{paddingTop: "200px"}}>
        <h1 class="mb-3" style={{fontSize: "50px", fontFamily: ""}}>Yoga and Sound Healing</h1>
        <h4 class="mb-3">Come join me in the healing that I do to heal you to make you better</h4>
        <a class="btn btn-outline-light btn-lg" href="#!" role="button">Contact me</a>
      </div>
    </div>
  </div>
</div>
{/* {/ <!-- Hero --> */}
    {/* <div id='home' style={{ height: 'auto', backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingTop: '100px' }}>
      <div className="d-flex justify-content-center slideInLeft">
        <section className="text-center text-lg-start">
          <div className="card mb-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderColor: 'rgba(0, 0, 0, 0.0)' }}>
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-5 d-flex justify-content-center align-items-center">
                <img src="https://pngimg.com/d/yoga_PNG13.png" alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
              </div>
              <div className="col-lg-6">
                <div className="card-body py-5 px-md-5">
                  <h1 style={{ fontFamily: 'Agbalumo, cursive' }}>We do the Yoga stuff and things</h1>
                  <Button onClick={handleShow} className='float-right button-pop-out' style={{ fontFamily: 'Agbalumo, cursive', backgroundColor: '#a2d2ff', borderColor: '#a2d2ff', color: 'black' }}>Book Now</Button>
                  <Modal show={show} onHide={handleClose}>
                    <div style={{ backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', fontFamily: 'Agbalumo, cursive'}}>
                    <Modal.Header closeButton>
                      <Modal.Title>Book Now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Yoga Master"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="really@goodatyoga.com"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Message</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button style={{ backgroundColor: '#a2d2ff', borderColor: '#a2d2ff', color: 'black' }} onClick={handleClose}>
                        Send Message
                      </Button>
                    </Modal.Footer>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>    
      <center>
      <Container id='services'>
      <Row className="d-flex flex-wrap justify-content-center slideInRight">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Yoga</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://www.makanasbeachbungalows.com/wp-content/uploads/2015/10/beach-yoga.jpg)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>More Yoga</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Most Yoga</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
    </center>
</div> */}
{/* <section class="background-radial-gradient overflow-hidden" id='gallery'>
  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5 reveal">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
          Take a look at <br />
          <span style={{color: "hsl(218, 81%, 75%)"}}>our gallery</span>
        </h1>
        <p class="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body">
          <Carousel>
      <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '900px', height: '410px'}}
        className="d-block w-100"
        src="https://www.makanasbeachbungalows.com/wp-content/uploads/2015/10/beach-yoga.jpg"
        alt="First slide"
      />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '900px', height: '410px'}}
        className="d-block w-100"
        src="https://www.makanasbeachbungalows.com/wp-content/uploads/2015/10/beach-yoga.jpg"
        alt="First slide"
      />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '900px', height: '410px'}}
        className="d-block w-100"
        src="https://www.makanasbeachbungalows.com/wp-content/uploads/2015/10/beach-yoga.jpg"
        alt="First slide"
      />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section id="yogaSound"  style={{backgroundColor: '#fff6ea', paddingBottom: '', width: '100vw'}}>
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
          background: "#fff6ea",
          backdropFilter: "blur(30px)",
        }}>
          <div class="card-body">
            <div class="row">
              {/* <!-- Column for image on the left --> */}
              <div class="col-md-6">
                <img src={BigGroupSit} style={{maxWidth: '100%', height: 'auto'}}></img>
              </div>
              {/* <!-- Column for text on the right --> */}
              <div class="col-md-6">
                <h1 class="fw-bold mb-5 py-5" style={{fontSize:"45px"}}>Yoga & Sound Experience!</h1>
                  <p style={{textAlign: "left", fontSize:"30px"}}>Bree C guides you through a gentle and mindful, 30-minute yoga flow. Perfect for beginners or experienced yogis looking to relieve tension/stress.
                  Bree M creates vibrational frequencies with crystal sound bowls and guides a 30-minute meditation to promote healing, stress reduction, and energetic balance.
                  <br></br>
                  <br></br>
                  <center><a class="btn btn-outline-dark btn-lg" style={{fontSize:"30px"}} href="#!" role="button">Contact me</a></center>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="eventPrivate" class="text-center" style={{backgroundColor: '#fff6ea', paddingBottom: '50px'}}>
    <div class="card-body py-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
          <h2 class="fw-bold mb-5">Private Events</h2>
          <p> Customize the Yoga & Sound Experience for your next corporate or private event.</p>

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
          
          
    <center><a class="btn btn-outline-dark btn-lg mt-4" style={{fontSize:"30px"}} href="#!" role="button">Contact me</a></center>        </div>
      </div>
    </div>
</section>

<section id="eventMoon" class="text-center" style={{backgroundColor: '#fff6ea', paddingBottom: '50px', width: '100vw'}}>
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
    {/* <!-- Card for text and image --> */}
    <div class="row">
      <div class="col-lg-12">
        <div class="" style={{
          marginTop: "-250px",
          background: "#fff6ea",
          backdropFilter: "blur(30px)",
        }}>
          <div class="card-body">
            <div class="row">
              {/* <!-- Column for text on the left --> */}
              <div class="col-md-6">
                <h2 class="fw-bold mb-5 py-5">Moon Events</h2>
                <p style={{fontSize:"20px"}}> Yoga + Sound is a journey of self-discovery and inner peace using the energy of the Full Moon, 
                combining the therapeutic practice of yoga with the soothing vibrations of sound healing. 
                Release tension, clear your mind, and restore your natural equilibrium. 
                Full Moon Ritual immediately following class for those who would like to stay and partake in the magic.
                <br></br>
                button: current offerings here !!!</p>
              </div>
              {/* <!-- Column for image on the right --> */}
              <div class="col-md-6">
                <img src="https://moon.nasa.gov/internal_resources/604/share-phases.jpg" style={{maxWidth: '100%', height: 'auto'}}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <section id="workshop" class="text-center" style={{backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingBottom: '50px'}}>
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: '300px'}}
        ></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong reveal" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.6)",
        backdropFilter: "blur(30px)",
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Workshops</h2>
          <p> Immerse yourself in the transformative journey of yoga and sound healing with our thoughtfully designed workshops and retreats!
          Go deeper into these powerful practices, where support and profound learning go hand in hand.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="mission" class="text-center" style={{backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingBottom: '50px'}}>
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: '300px'}}
        ></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong reveal" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.6)",
        backdropFilter: "blur(30px)",
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Our Mission</h2>
          <p> Our mission is to create a safe space for our community to experience the transformative power of yoga and sound healing. 
            Fusing these two practices offers a unique balance of Mind, Body, and Spirit.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="companyBio" class="text-center" style={{backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingBottom: '50px'}}>
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: '300px'}}
        ></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong reveal" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.6)",
        backdropFilter: "blur(30px)",
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Origins</h2>
          <p> Seven years ago, in the heart of Atlanta, a chance encounter at a wellness boutique brought us together. 
          It was there that we, Bree and Bree, discovered a mutual passion for yoga and meditation, as well as a shared dream to spread healing across the globe. 
          Our belief is firmly rooted in the inclusivity of wellness, welcoming individuals of all shapes, sizes, and mindsets. 
          We are committed to creating an environment where everyone feels accepted and can partake in the journey of healing, support, and unconditional love. 
          This inclusive approach forms the cornerstone of our mission, ensuring that our space is a sanctuary for all who seek wellness and community.
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

<section id="bioBreeC" class="text-center" style={{backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingBottom: '50px'}}>
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: '300px'}}
        ></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong reveal" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.6)",
        backdropFilter: "blur(30px)",
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Bree C</h2>
          <p> Hello, I'm Bree :) Holistic wellness coach, nutritionist, yoga and meditation instructor, and personal trainer. 
          My approach to mental and physical healing is nurtured through balanced mindfulness, movement, breathing, rest, and proper nutrition. I teach techniques that guide you to:
          <br></br>
          Adopt sustainable, nourishing dietary habits that fuel both body and soul.
          <br></br>
          Deepen the connection with your inner self, cultivating mindfulness and self-awareness.
          <br></br>
          Balance your physical, emotional, and spiritual well-being through integrative practices.
          <br></br>
          Enjoy the harmonious, vibrant, and joyous things in life.
</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="bioBreeM" class="text-center" style={{backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingBottom: '50px'}}>
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: '300px'}}
        ></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong reveal" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.6)",
        backdropFilter: "blur(30px)",
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Bree M</h2>
          <p> Hello, I’m Bree! A natural-born Empathic Clairvoyant, Tarot Reader, Sound Healing Practitioner, Reiki/Energy Healer, Meditation Guide, 
          Certified Yoga Teacher for over 11 years mastered in methods/forms including Vinyasa, BUTI, YIN, Restorative, Kundalini and many more. 
          For someone who can see and hear into the spirit world, I love helping people discover the answers they are seeking. 
          I’m known for my direct honesty, delivery, empathy, sense of humor and accuracy during my classes and 1:1 sessions. 
          During your experience, I tune in and speak directly from the heart with pure authenticity & love with the guidance/downloads I receive. 
          My life’s purpose is to help show people they are chosen for a unique calling and purpose as well through healing guidance techniques. 
          And most importantly, to always hold a safe space for my students and clients to be seen, heard and understood throughout their journey.
</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="testimonials" class="text-center" style={{backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingBottom: '50px'}}>
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: '300px'}}
        ></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong reveal" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.6)",
        backdropFilter: "blur(30px)",
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Testimonials</h2>
          <p> This section will hold testimonials from previous customers!</p>
        </div>
      </div>
    </div>
  </div>
</section> */}

</div>    
  );
}

export default Home;
