import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IReducers } from './interfaces';

export interface IMapToProps {
  dispatchToProps?: (dispatch: any) => any;
  stateToProps?: (state: IReducers) => any;
  styles?: any;
  withRouter?: boolean;
}

export const DEFAULT_PROPS: IMapToProps = {
  dispatchToProps: dispatch => ({}),
  stateToProps: (state: any) => ({}),
  styles: null,
  withRouter: false
};

abstract class ReduxComponent<T = object, TT = object> extends React.Component<T, TT> {
  
  public static init () {
    return this.mapToProps();
  }
  
  public static mapToProps (obj: IMapToProps = DEFAULT_PROPS) {
    const self: any = this;
    const connected: any = connect( obj.stateToProps, obj.dispatchToProps )( self );
    return obj.withRouter ? withRouter( connected ) : connected;
  }
  
  protected constructor (props?: any) {
    super( props );
  }
}

export default ReduxComponent;
