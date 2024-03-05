function Footer() {
    return (       
        <div>
        <footer className="text-center text-black" style={{  backgroundImage: 'linear-gradient(to bottom, #fff6ea, #90adc6)'}}>
          <div className="container p-4">
            <section className="mb-4">
            </section>

            <section className="mb-4">
              <p style={{fontSize: '20px'}}>
                Immerse yourself in the synergy of yoga and soothing sounds for ultimate wellbeing. 
                The blend of calming melodies and mindful movements creates a harmonious path to inner peace and balance.
              </p>
            </section>
 
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="">Located In</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a className="text-black" style={{ textDecoration: 'none' }}>Atlanta Georgia</a>
                    </li>
                  </ul>
                </div>
     
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="">Developer Links</h5>
        
                  <ul className="list-unstyled mb-0">

                  <li>
                    <span className="text-black">John I-M</span>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/john-ifert-miller-36231126a/" className="icon-link">
                      <i className="fab fa-linkedin-in" style={{ color: 'black' }}></i>
                    </a>
                    &nbsp;
                    <a href="https://github.com/johnboy514" className="icon-link">
                      <i className="fab fa-github" style={{ color: 'black' }}></i>
                    </a>
                  </li>

                    <li>
                      <span className="text-black">Robert O</span>
                      &nbsp;
                      <a href="https://www.linkedin.com/in/robert-obernier-700b36269/" className="icon-link">
                        <i className="fab fa-linkedin-in" style={{ color: 'black' }}></i>
                      </a>
                      &nbsp;
                      <a href="https://github.com/rjo6615" className="icon-link">
                        <i className="fab fa-github" style={{ color: 'black' }}></i>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </section>
          </div>
        
        </footer>
        </div>
    )
}

export default Footer;