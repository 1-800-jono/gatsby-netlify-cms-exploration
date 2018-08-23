import React from 'react';
import { css } from 'emotion';
import marked from 'marked';


const ImageTextTwoColumn = props => {
  const { image, text } = props.data;
  return (
    <section>
      <div className={css`
        max-width: 87.5em;
      `}>
        <div>
          <img src={image.imagePath} alt={image.imgAlt}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>
    </section>
  );
};

export default ImageTextTwoColumn;