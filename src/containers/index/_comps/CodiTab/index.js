import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SubBanner from 'components/SubBanner';
import SubBannerTransparent from 'components/SubBannerTransparent';
import SubTab from 'components/SubTab';
import { ArrowRightIcon } from 'components/Icon';
import codi from 'mocks/codi';
import StyleList from '../_comps/StyleList';

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: '0 15px',
  },
  codiContainer: {
    padding: '0 15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  codiWrap: {
    display: 'flex',
    paddingBottom: 25,
    flex: '0 0 calc(100% / 2 - 1.5px)',
    flexDirection: 'column',
    fontSize: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  codiImgWrap: {
    paddingBottom: 10,
  },
  codiLinkWrap: {
    '& a': {
      display: 'flex',
      '& img': {
        width: 45,
        height: 54,
      },
    },
  },
  codiInfoWrap: {
    padding: '8px 15px 8px 10px',
    width: 'calc(100% - 45px)',
    fontSize: 12,
    '& p': {
      color: theme.palette.grey[700],
    },
    '& strong': {
      color: theme.palette.text.primary,
    },
    '& span': {
      color: '#FF0000',
    },
  },
  goToPage: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    '& > a': {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 12px 9px 20px',
      border: '1px solid #F1F1F1',
      borderRadius: 20,
      boxSizing: 'border-box',
      color: theme.palette.grey[700],
      fontSize: 14,
      '& svg': {
        marginLeft: 5,
      },
    },
  },
  styleWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  styleImgWrap: {
    display: 'flex',
    flex: '0 0 calc(100% / 2 - 1.5px)',
    width: '50%',
  },
  styleLinkWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '50%',
  },
  item: {
    flex: '0 0 calc(100% / 2 - 1.5px)',
    paddingBottom: 3,
    width: '50%',
    borderRadius: 4,
    '&:nth-child(1), &:nyh-child(2)': {
      paddingBottom: 0,
    },
    '& a': {
      display: 'block',
      fontSize: 0,
    },
    '& p': {
      padding: '10px 0',
      textAlign: 'center',
      fontSize: 12,
      color: '#000',
      borderRadius: '0 0 4px 4px',
      backgroundColor: theme.palette.grey[100],
    },
  },
}));

const LISTS = [
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg',
    label: '코디숍',
  },
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg',
    label: '코디맵',
  },
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg',
    label: '브랜드 스냅',
  },
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg',
    label: '스트릿 스냅',
  },
];

const CodiTab = () => {
  const classes = useStyles();

  return (
    <div>
      <SubTab />
      <div className={classes.codiContainer}>
        {codi.map(({ name, image, linkImage, price, salePercent }, i) => (
          <div key={i} className={classes.codiWrap}>
            <div className={classes.codiImgWrap}>
              <img src={image} alt="코디" />
            </div>
            <div className={classes.codiLinkWrap}>
              <a href="/">
                <img src={linkImage} alt="코디" />
                <div className={classes.codiInfoWrap}>
                  <p>{name}</p>
                  <strong>{price}</strong>
                  <span>{salePercent}</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.goToPage}>
        <a href="/">
          전체 보기
          <ArrowRightIcon />
        </a>
      </div>
      <div className={classes.wrap}>
        <SubBanner />
      </div>
      <SubTab />
      <StyleList />
      <div className={classes.styleWrap}>
        <div className={classes.styleImgWrap}>
          <img
            src="https://image.msscdn.net/musinsaUI/homework/coordi/img8.jpg"
            alt="코디"
          />
        </div>
        <div className={classes.styleLinkWrap}>
          {LISTS.map(({ image, label }) => (
            <div key={label} className={classes.item}>
              <a href="/">
                <img src={image} alt="코디" />
                <p>{label}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <StyleList />
      <div className={classes.wrap}>
        <SubBannerTransparent />
      </div>
      <SubTab />
      <StyleList />
      <StyleList />
      <div className={classes.wrap}>
        <SubBanner />
      </div>
    </div>
  );
};

export default CodiTab;
