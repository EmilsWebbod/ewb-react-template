import * as React from 'react';
import styled from 'styled-components';

const AboutUs = styled.div`
  font-weight: bold;
`;

class AboutUsComponent extends React.Component {

  public render() {
    return (
      <AboutUs>
        About us
      </AboutUs>
    )
  }
}

export default AboutUsComponent;
