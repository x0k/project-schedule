import { connect } from 'react-redux';

import { toggleDrawer } from '../actions';

import Navigation from '../components/navigation';

const stateToProps = (state) => ({
  open: state.drawerOpen
});

const dispatchToProps = (dispatch) => ({
  drawerHandler: () => dispatch(toggleDrawer())
});

export default connect(stateToProps, dispatchToProps)(Navigation);
