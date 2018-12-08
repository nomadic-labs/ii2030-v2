import React from "react";
import PropTypes from "prop-types";

import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";


const PlainText = props => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;

  return (
    <Editable
      editor={PlainTextEditor}
      handleSave={handleSave}
      content={{ text: text }}
      {...props}
    >
      { text }
    </Editable>
  );
};

PlainText.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

PlainText.defaultProps = {
  content: { text: 'Placeholder' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default PlainText;
