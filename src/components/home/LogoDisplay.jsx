import React from "react";
import Image from "../../components/editables/Image";
import PlainText from "../../components/editables/PlainText";

import Button from "@material-ui/core/Button"


const LogoDisplay = ({ entity, index, onSave, onDelete }) => {
  return(
    <div>
      <a href={!onDelete ? entity.link ? entity.link.text : "#" : null} target="_blank" rel="noopener noreferrer">
        <Image content={ entity.logo } onSave={onSave(index, "logo")} showCaption={false} editCaption={true} />
        { onDelete && <PlainText content={ entity.link } onSave={onSave(index, "link")} placeholder={"URL"} /> }
      </a>
      { onDelete && <Button onClick={onDelete(index)}>Delete</Button> }
    </div>
  )
}

export default LogoDisplay;
