import * as React from 'react';
import styled from 'styled-components';
import ReduxComponent, {IMapToProps} from '../../../redux/Redux.component';

interface IProps {
  test: any;
}

const DEFAULT_PROPS = {
  stateToProps: (state: any) => ({test: 'Super dispatchToProps'})
};

const Test = styled.div`
  font-size: 2rem;
`;

class TestComponent extends ReduxComponent<IProps, object> {

  public static reduxMapToProps(obj: IMapToProps = DEFAULT_PROPS) {
    return super.mapToProps(obj);
  }

  public render() {
    return (
      <Test>
        {this.props.test}
      </Test>
    );
  }
}

export default TestComponent;
