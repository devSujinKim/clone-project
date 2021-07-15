import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ButtonBase } from '@material-ui/core';
import { BellIcon, HeartIcon, CartIcon } from 'components/Icon';
import Logo from 'components/Logo';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  left: {
    position: 'absolute',
    left: 10,
    justifyContent: 'flex-start',
  },
  right: {
    position: 'absolute',
    right: 10,
    justifyContent: 'flex-end',
  },
  iconBtn: {
    padding: 5,
  },
  logoWrap: {
    justifyContent: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.root}>
      <div className={classes.left}>
        <ButtonBase type="button" className={classes.iconBtn}>
          <BellIcon />
        </ButtonBase>
      </div>
      <h2 className={classes.logoWrap}>
        <a href="/">
          <Logo />
        </a>
      </h2>
      <div className={classes.right}>
        <ButtonBase type="button" className={classes.iconBtn}>
          <HeartIcon />
        </ButtonBase>
        <ButtonBase type="button" className={classes.iconBtn}>
          <CartIcon />
        </ButtonBase>
      </div>
    </Container>
  );
};

export default Header;
