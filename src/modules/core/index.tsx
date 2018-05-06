
import TestComponent from './TestComponent/Test.component';

export const TestWithApi = TestComponent.reduxMapToProps({
  stateToProps: (state: any) => ({api: state.api})
});
