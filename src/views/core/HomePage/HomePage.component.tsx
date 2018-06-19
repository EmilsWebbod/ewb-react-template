import * as React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import TestReduxComponent from '../TestComponent/Test.component';

const initialState = {};
type State = typeof initialState;

const HomePage = styled.div`
  color: blue;
`;

export default class HomePageComponent extends Component<object, State> {
  public state: State = initialState;
  
  public render () {
    const Comp = TestReduxComponent.mapToProps( {
      stateToProps: (state: any) => ({ test: 'Coolio' })
    } );
    
    const {} = this.props;
    return (
      <HomePage>
        HomePageComponent
        
        <Comp/>
      </HomePage>
    );
  }
}
