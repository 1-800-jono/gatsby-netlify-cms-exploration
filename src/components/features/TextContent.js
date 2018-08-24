import React from 'react';
import marked from 'marked';
import { css } from 'react-emotion';

const TextContent = props => {
  const { centerAlign, text } = props;
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: marked(text) }}
      className={css`
        max-width: 50rem;
        padding: 1rem 0;
        margin: 0 auto;
      `}
      style={{ textAlign: centerAlign ? 'center' : 'left'}}
    >
    </div>
  );
};

export default TextContent;