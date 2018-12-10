import React from "react";
import Image from "../../components/editables/Image";
import PlainText from "../../components/editables/PlainText";


const LogoDisplay = ({ logo, onSave }) => {
  return(
    <div>
      <Image content={ logo.logo } />
      <PlainText content={ logo.name } className="hidden" />
    </div>
  )
}


export default LogoDisplay;
