import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from 'components/Layout/ContentsWrap';
import Header from 'components/Layout/Header';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: 640,
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Layout>
        <Header />
      </Layout>
    </div>
  );
};

export default Index;
