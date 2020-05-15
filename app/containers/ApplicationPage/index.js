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

import { makeSelectUserSelected } from 'containers/User/selectors';
import { selectBlock } from 'containers/User/actions';
import AppGrid, { AppGridController } from 'components/AppGrid';
import { AppContainer, AppControlContainer } from './style';
import makeSelectApp, {
  makeSelectGrid,
  makeSelectBlocksArray,
} from './selectors';
import {
  addBlock,
  changeBlockStyle,
  addSubBlock,
  initializeBlockContent,
} from './actions';

export const ApplicationPage = props => {
  const { grid, blocks, userSelect } = props;
  /**
   * actions
   */
  const {
    onAddBlock,
    onSelectBlock,
    onAddSubBlock,
    onBlockStyleChange,
    onInitializeBlockContent,
  } = props;
  const appGridActions = {
    onSelectBlock,
    onInitializeBlockContent,
  };
  const appGridControllerActions = {
    onAddBlock,
    onBlockStyleChange,
    onAddSubBlock,
  };
  return (
    <div>
      <Helmet>
        <title>ApplicationPage</title>
        <meta name="description" content="Description of ApplicationPage" />
      </Helmet>
      <div style={{ display: 'flex' }}>
        <AppContainer>
          <AppGrid {...grid} blocks={blocks} actions={appGridActions} />
        </AppContainer>
        <AppControlContainer>
          <AppGridController
            actions={appGridControllerActions}
            userSelect={userSelect}
          />
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
  onBlockStyleChange: PropTypes.func,
  onAddSubBlock: PropTypes.func,
  onInitializeBlockContent: PropTypes.func,
  blocks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  applicationPage: makeSelectApp(),
  grid: makeSelectGrid(),
  blocks: makeSelectBlocksArray(),
  userSelect: makeSelectUserSelected(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onAddBlock: data => dispatch(addBlock(data)),
    onSelectBlock: block => dispatch(selectBlock(block)),
    onAddSubBlock: (block, subBlockType, subBlockProps) =>
      dispatch(addSubBlock(block, subBlockType, subBlockProps)),
    onBlockStyleChange: (block, state) =>
      dispatch(changeBlockStyle(block, { [state.id]: state.value })),
    onInitializeBlockContent: block => dispatch(initializeBlockContent(block)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ApplicationPage);
