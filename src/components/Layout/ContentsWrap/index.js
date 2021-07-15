import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flex: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    maxWidth: 640,
    minHeight: 'auto',
  },
}));

const ContentsWrap = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

ContentsWrap.propTypes = {
  children: propTypes.any.isRequired,
};

export default ContentsWrap;
