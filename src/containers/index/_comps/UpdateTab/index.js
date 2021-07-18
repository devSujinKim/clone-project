import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RefreshIcon, ArrowRightIcon } from 'components/Icon';
import SubTab from 'components/SubTab';
import SubBannerTransparent from 'components/SubBannerTransparent';
import Recommend from './_comps/Recommend';
import UpdateNews from './_comps/UpdateNews';
import UpdateNewsSecond from './_comps/UpdateNewsSecond';
import UpdateNewsThird from './_comps/UpdateNewsThird';

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: '0 15px',
  },
  goToPage: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    '& > a': {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px 9px 20px',
      border: '1px solid #F1F1F1',
      borderRadius: 20,
      boxSizing: 'border-box',
      color: theme.palette.grey[700],
      fontSize: 14,
      '& svg': {
        marginRight: 5,
      },
    },
  },
  updateWrap: {
    paddingTop: 60,
  },
  updateTitleWrap: {
    padding: '6px 10px 7px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > h3': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: 18,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& > a': {
      position: 'absolute',
      right: 15,
      margin: '0 0 0 auto',
      display: 'flex',
      fontSize: 12,
      color: '#777',
    },
  },
}));

const UpdateTab = () => {
  const classes = useStyles();

  return (
    <div>
      <Recommend />
      <div className={classes.goToPage}>
        <a href="/">
          <RefreshIcon />
          새로운 추천
        </a>
      </div>
      <div className={classes.updateWrap}>
        <div className={classes.updateTitleWrap}>
          <h3>업데이트 소식</h3>
          <a href="/">
            전체
            <ArrowRightIcon />
          </a>
        </div>
        <SubTab />
        <UpdateNews />
        <div className={classes.wrap}>
          <SubBannerTransparent />
        </div>
        <UpdateNewsSecond />
        <SubTab />
        <UpdateNewsThird />
      </div>
    </div>
  );
};

export default UpdateTab;
