import React from "react";
import Image from "../../components/editables/Image";

import Button from "@material-ui/core/Button"


const LogoDisplay = ({ entity, index, onSave, onDelete }) => {
  return(
    <div>
      <Image content={ entity.logo } onSave={onSave(index, "logo")} showCaption={false} editCaption={true} />
      { onDelete && <Button onClick={onDelete(index)}>Delete</Button> }
    </div>
  )
}

export default LogoDisplay;
