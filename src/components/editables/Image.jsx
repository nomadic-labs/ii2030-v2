import React from 'react'
import PropTypes from 'prop-types'

import Editable from './Editable'
import ImageEditor from '../editingTools/ImageEditor'

const styles = {
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '100%'
  }
}


const Image = (props) => {
  const handleSave = content => {
    props.onSave(content)
  }

  return (
    <Editable
      editor={ImageEditor}
      handleSave={handleSave}
      content={{ imageSrc: props.imageSrc, caption: props.caption }}
      { ...props }
    >
      <div className='img edit-container' style={styles.imageContainer}>
        <img src={props.imageSrc} alt={props.caption} style={styles.image} />
        <small>{props.caption}</small>
      </div>
    </Editable>
  );
};

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  caption: PropTypes.string,
}

Image.defaultProps = {
  imageSrc: '/images/head-with-bubble.png',
  onSave: content => console.log('Implement a function to save changes!', content),
}

export default Image;