import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../state';


interface Props {
  dispatch: Dispatch
}

interface State {
}


class Home extends React.PureComponent<Props, State> {
  render(): JSX.Element {
    return (
      <h1>Welcome to the test</h1>
    );
  }

}

const mapStateToProps = (state: AppState) => {
  return {
  };
};

export default connect(
  mapStateToProps,
)(Home);
