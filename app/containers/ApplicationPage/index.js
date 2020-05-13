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

import { Button } from 'style';
import AppGrid from 'components/AppGrid';
import { AppContainer, AppControlContainer } from './style';
import makeSelectApp, { makeSelectGrid } from './selectors';
import { addBlock } from './actions';

export const ApplicationPage = props => {
  const { grid } = props;
  /**
   * actions
   */
  const { onAddBlock } = props;
  return (
    <div>
      <Helmet>
        <title>ApplicationPage</title>
        <meta name="description" content="Description of ApplicationPage" />
      </Helmet>
      <div style={{ display: 'flex' }}>
        <AppContainer>
          <AppGrid {...grid} />
        </AppContainer>
        <AppControlContainer>
          <Button
            onClick={() =>
              onAddBlock({
                position: {
                  gridColumnStart: 1,
                  gridColumnEnd: 2,
                  gridRowStart: 2,
                  gridRowEnd: 3,
                },
              })
            }
          >
            Add Block
          </Button>
        </AppControlContainer>
      </div>
    </div>
  );
};

ApplicationPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  grid: PropTypes.any,
  onAddBlock: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  applicationPage: makeSelectApp(),
  grid: makeSelectGrid(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onAddBlock: data => dispatch(addBlock(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ApplicationPage);
