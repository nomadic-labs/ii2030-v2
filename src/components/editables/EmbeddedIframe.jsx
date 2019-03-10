import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import EmbeddedIframeEditor from "../editingTools/EmbeddedIframeEditor";

const styles = {
  video: {
    position: "relative",
    paddingBottom: "56.25%",
    height: "0",
    maxWidth: "740px",
    width: "100vw",
  }
}

const EmbeddedIframe = ({ className, ...props }) => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { src } = props.content;

  console.log(props.content)

  return (
    <Editable
      editor={EmbeddedIframeEditor}
      handleSave={handleSave}
      content={{ src: src }}
      {...props}
    >
      <div className="video">
        <iframe
          src={ src }
          height="284"
          width="504"
          frameBorder="0"
          allowFullScreen="true"
        />
      </div>
    </Editable>
  );
};

EmbeddedIframe.propTypes = {
  content: PropTypes.shape({ src: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

EmbeddedIframe.defaultProps = {
  content: { src: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EmbeddedIframe;
