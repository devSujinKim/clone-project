import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ContentsWrap from './ContentsWrap';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: '100vh',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <ContentsWrap>{children}</ContentsWrap>
    </div>
  );
};

Layout.propTypes = {
  children: propTypes.any.isRequired,
};

export default Layout;
