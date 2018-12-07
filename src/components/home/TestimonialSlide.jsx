import React from "react";


const TestimonialSlide = ({ testimonial }) => {
  return(
    <div className="pure-u-1 slide">
    <div className="content-container pure-g centered">
      <div className="pure-u-1 pure-u-md-2-3">
        { testimonial.imgSrc &&
          <div className="image">
            <img src={ testimonial.imgSrc } alt={ testimonial.title } className="pure-img" />
          </div>
        }
        <h3 className="title">{ testimonial.title }</h3>
        <p className="quote">"{ testimonial.quote }"</p>
      </div>
    </div>
  </div>
  )
}


export default TestimonialSlide;
