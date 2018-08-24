import React from 'react';
import styled, {css} from 'react-emotion';
import marked from 'marked';


const Container = styled.div`
  max-width: 87.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0;
`

const Children = styled.div`
  width: 45%;
`

const ImageTextTwoColumn = props => {
  const { image, text,  reverseLayout} = props.data;
  return (
    <section>
      <Container style={{flexDirection: reverseLayout ? 'row-reverse' : 'row' }}>
        <Children className={css`text-align: center;`}>
          <img src={image.imagePath} alt={image.imgAlt}/>
        </Children>
        <Children  dangerouslySetInnerHTML={{ __html: marked(text) }}></Children>
      </Container>
    </section>
  );
};

export default ImageTextTwoColumn;