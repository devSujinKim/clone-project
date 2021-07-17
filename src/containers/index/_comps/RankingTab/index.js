import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import goodsMock from 'mocks/rankingFirst';
import Goods from './_comps/Goods';

const useStyles = makeStyles(() => ({
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
    <div>
      <div>
        <Typography variant="h3">상품 랭킹</Typography>
        <a href="/">전체</a>
        <p>전체 연령대</p>
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
    </div>
  );
};

export default RankingTab;
