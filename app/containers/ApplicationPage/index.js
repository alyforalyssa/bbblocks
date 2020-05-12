/**
 *
 * ApplicationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import AppGrid from 'components/AppGrid';
import makeSelectApp, { makeSelectGrid } from './selectors';

/**
 * Styles
 */

import { AppContainer } from './style';

export const ApplicationPage = props => {
  const { grid } = props;
  return (
    <div>
      <Helmet>
        <title>ApplicationPage</title>
        <meta name="description" content="Description of ApplicationPage" />
      </Helmet>
      <AppContainer>
        <AppGrid {...grid} />
      </AppContainer>
    </div>
  );
};

ApplicationPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  grid: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  applicationPage: makeSelectApp(),
  grid: makeSelectGrid(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ApplicationPage);
