import React from "react";


const LogoDisplay = ({ logo }) => {
  return(
   <img src={ logo.imageSrc } alt={ logo.name } />
  )
}


export default LogoDisplay;
