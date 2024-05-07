import React from "react";
import '../App.css'

function Hero() {
    return (
    <div className="container col-xxl-8 px-4 py-5 h-screen">
          <div className="row flex-lg-row-reverse align-items-center h-full">
            <div className="col-10 col-sm-8 col-lg-6">
              {/* <img src={Img} className="d-block mx-lg-auto img-fluid" alt="Image" width="700" height="500" loading="lazy"/> */}
            </div>
          <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Cillum commodo duis sunt culpa id.</h1>
          <p className="lead">Commodo qui qui Lorem laboris Lorem dolore exercitation qui dolore sit est.</p>
        
      </div>
    </div>
  </div>
 
    );
}

export default Hero;