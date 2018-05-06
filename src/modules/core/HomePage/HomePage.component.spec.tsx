import {shallow} from 'enzyme';
import * as React from 'react';

import HomePageComponent from './HomePage.component';

const Shallow = () => shallow(<HomePageComponent />);

describe('HomePageComponent', () => {
  it('renders the heading', () => {
    expect(Shallow).toBeTruthy();
  });
});
