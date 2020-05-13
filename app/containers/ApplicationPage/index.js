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
import { makeSelectUserSelected } from 'containers/User/selectors';
import { selectBlock } from 'containers/User/actions';
import AppGrid from 'components/AppGrid';
import { AppContainer, AppControlContainer } from './style';
import makeSelectApp, { makeSelectGrid } from './selectors';
import { addBlock } from './actions';

export const ApplicationPage = props => {
  const { grid } = props;
  /**
   * actions
   */
  const { onAddBlock, onSelectBlock, userSelect } = props;
  const appGridActions = {
    onSelectBlock,
  };
  return (
    <div>
      <Helmet>
        <title>ApplicationPage</title>
        <meta name="description" content="Description of ApplicationPage" />
      </Helmet>
      <div style={{ display: 'flex' }}>
        <AppContainer>
          <AppGrid {...grid} actions={appGridActions} />
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
          {userSelect.block.toString()}
        </AppControlContainer>
      </div>
    </div>
  );
};

ApplicationPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  grid: PropTypes.any,
  userSelect: PropTypes.any,
  onAddBlock: PropTypes.func,
  onSelectBlock: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  applicationPage: makeSelectApp(),
  grid: makeSelectGrid(),
  userSelect: makeSelectUserSelected(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onAddBlock: data => dispatch(addBlock(data)),
    onSelectBlock: block => dispatch(selectBlock(block)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ApplicationPage);
