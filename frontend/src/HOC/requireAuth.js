import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const requireAuth = (WrappedComponent) => {
  class AuthenticatedComponent extends React.Component {
    render() {
      const { token } = this.props;
      if (!token) {
        return <Navigate to="/login" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuth;
