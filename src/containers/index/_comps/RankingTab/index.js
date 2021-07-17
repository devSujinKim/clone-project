import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ArrowRightIcon, FilterIcon } from 'components/Icon';
import goodsMock from 'mocks/rankingFirst';
import Goods from './_comps/Goods';
import SubBanner from './_comps/SubBanner';

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
        {goodsMock.map(
          ({ rankNum, name, image, price, badge, salePercent }) => (
            <Goods
              key={rankNum}
              rankNum={rankNum}
              name={name}
              image={image}
              price={price}
              badge={badge && badge}
              salePercent={salePercent}
            />
          )
        )}
      </div>
      <SubBanner />
    </div>
  );
};

export default RankingTab;
