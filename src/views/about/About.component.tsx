import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RouteWithSubRoutes from '../../shared/RoutesWithSubRoutes/RoutesWithSubRoutes.component';
import { aboutRoutes } from './About.router';

const About = styled.div`
  
`;

class AboutComponent extends React.Component {
  
  public render () {
    return (
      <About>
        <br/>
        <NavLink to="/about">About Home</NavLink>
        &nbsp;
        <NavLink to="/about/us">About Us</NavLink>
        <br/>
        <br/>
        About Home
        <br/>
        <br/>
        
        { aboutRoutes.map( (route, index) => (
          <RouteWithSubRoutes
            key={ index }
            { ...route }
          />
        ) ) }
      </About>
    )
  }
}

export default AboutComponent;
