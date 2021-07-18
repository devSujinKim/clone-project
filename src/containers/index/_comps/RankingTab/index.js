import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ArrowRightIcon, FilterIcon } from 'components/Icon';
import rankingFirst from 'mocks/rankingFirst';
import rankingSecond from 'mocks/rankingSecond';
import rankingThird from 'mocks/rankingThird';
import SubBanner from 'components/SubBanner';
import SubBannerTransparent from 'components/SubBannerTransparent';
import Goods from './_comps/Goods';

const useStyles = makeStyles((theme) => ({
  titleWrap: {
    padding: '6px 0 7px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    paddingRight: 8,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.5,
  },
  allGoods: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    color: theme.palette.grey[700],
  },
  filter: {
    margin: '0 0 0 auto',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
  },
  wrap: {
    padding: 15,
  },
  rankingGoods: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subBannerContainer: {
    display: 'flex',
    padding: '60px 0',
    '& img': {
      width: 'auto',
      height: 90,
      borderRadius: '6px 0 0 6px',
    },
  },
  subBannerWrap: {
    display: 'flex',
    backgroundColor: theme.palette.grey[100],
  },
  subBannerTxtWrap: {
    margin: 'auto',
    padding: '0 15px',
    width: '100%',
  },
  subBannerTitle: {
    fontSize: 15,
    fontWeight: theme.typography.fontWeightMedium,
  },
  subBannerTxt: {
    paddingTop: 3,
    fontSize: 12,
    color: theme.palette.grey[700],
  },
  circle: {
    display: 'inline-block',
    margin: '0 6px',
    width: 2,
    height: 2,
    backgroundColor: theme.palette.grey[700],
    borderRadius: '50%',
    verticalAlign: 'middle',
  },
  update: {
    '& > p': {
      fontSize: 12,
      color: theme.palette.grey[600],
    },
  },
  goToRankPage: {
    marginTop: 7,
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
}));

const RankingTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <div className={classes.titleWrap}>
        <Typography variant="h2" className={classes.title}>
          상품 랭킹
        </Typography>
        <a href="/" className={classes.allGoods}>
          전체
          <ArrowRightIcon />
        </a>
        <p className={classes.filter}>
          전체 연령대
          <FilterIcon />
        </p>
      </div>
      <div className={classes.rankingGoods}>
        {rankingFirst.map(
          ({ rankNum, name, image, price, badge, salePercent }) => (
            <Goods
              key={rankNum}
              rankNum={rankNum}
              name={name}
              image={image}
              price={price}
              badge={badge}
              salePercent={salePercent}
              topRank
            />
          )
        )}
      </div>
      <SubBanner />
      <div className={classes.rankingGoods}>
        {rankingSecond.map(
          ({ rankNum, name, image, price, badge, salePercent }) => (
            <Goods
              key={rankNum}
              rankNum={rankNum}
              name={name}
              image={image}
              price={price}
              badge={badge}
              salePercent={salePercent}
            />
          )
        )}
      </div>
      <SubBannerTransparent />
      <div className={classes.rankingGoods}>
        {rankingThird.map(
          ({ rankNum, name, image, price, badge, salePercent }) => (
            <Goods
              key={rankNum}
              rankNum={rankNum}
              name={name}
              image={image}
              price={price}
              badge={badge}
              salePercent={salePercent}
            />
          )
        )}
      </div>
      <SubBanner />
      <div className={classes.rankingGoods}>
        {rankingThird.map(
          ({ rankNum, name, image, price, badge, salePercent }) => (
            <Goods
              key={rankNum}
              rankNum={rankNum}
              name={name}
              image={image}
              price={price}
              badge={badge}
              salePercent={salePercent}
            />
          )
        )}
      </div>
      <div className={classes.subBannerContainer}>
        <div className={classes.subBannerWrap}>
          <img
            src="https://image.msscdn.net/musinsaUI/homework/banner/sub1.jpg"
            alt="서브 배너"
          />
          <div className={classes.subBannerTxtWrap}>
            <p className={classes.subBannerTitle}>
              신발 좋아요 신발 좋아요 신발 좋아요
            </p>
            <p className={classes.subBannerTxt}>
              키르시
              <span className={classes.circle} />
              133개 댓글
            </p>
          </div>
        </div>
      </div>
      <div className={classes.rankingGoods}>
        {rankingThird.map(
          ({ rankNum, name, image, price, badge, salePercent }) => (
            <Goods
              key={rankNum}
              rankNum={rankNum}
              name={name}
              image={image}
              price={price}
              badge={badge}
              salePercent={salePercent}
            />
          )
        )}
      </div>
      <div className={classes.update}>
        <p>5분 전 갱신</p>
      </div>
      <div className={classes.goToRankPage}>
        <a href="/">
          상품 랭킹 전체 보기
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default RankingTab;
