import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Editable from "./Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";

const Subtitle = props => {
  const handleSave = newContent => {
    props.onSave(newContent);
  };

  const { text } = props.content;

  return (
    <Typography variant="display2" gutterBottom>
      <Editable
        editor={PlainTextEditor}
        handleSave={handleSave}
        content={{ text: text }}
        {...props}
      >
        { text }
      </Editable>
    </Typography>
  );
};

Subtitle.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
}

Subtitle.defaultProps = {
  content: { text: 'Placeholder' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default Subtitle;
