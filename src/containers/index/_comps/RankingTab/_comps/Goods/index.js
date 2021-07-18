import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  wrap: {
    position: 'relative',
    marginBottom: 20,
    display: 'flex',
    flex: '0 0 calc(100% / 3 - 1.5px)',
    flexDirection: 'column',
    '& > a': {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
    },
  },
  topRank: {
    '&:nth-child(1), &:nth-child(2)': {
      flex: '0 0 calc(100% / 2 - 1.5px)',
      '& > a > span': {
        backgroundColor: theme.palette.grey[900],
      },
    },
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  priceInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& > strong': {
      fontSize: 13,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
    },
  },
  rankNum: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 22,
    height: 22,
    fontSize: 12,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[600],
  },
  name: {
    paddingTop: 10,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    fontSize: 12,
    color: theme.palette.grey[700],
  },
  salePercent: {
    margin: '0 2px 0 auto',
    color: '#FF0000',
    fontSize: 12,
    fontWeight: theme.typography.fontWeightMedium,
  },
  badge: {
    margin: '0 0 0 auto',
    padding: '2px 3px',
    fontSize: 9,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    backgroundColor: '#4162C9',
    borderRadius: 2,
  },
}));

const Goods = ({
  rankNum,
  name,
  image,
  price,
  badge,
  salePercent,
  topRank,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.wrap, topRank && classes.topRank)}>
      <a href="/">
        <span className={clsx(classes.rankNum, topRank && classes.topRankNum)}>
          {rankNum}
        </span>
        <img src={image} alt="상품 이미지" className={classes.image} />
        <div className={classes.info}>
          <p className={classes.name}>{name}</p>
          <div className={classes.priceInfo}>
            <strong>{price}</strong>
            {salePercent && (
              <span className={classes.salePercent}>{salePercent}</span>
            )}
            {badge && <span className={classes.badge}>{badge}</span>}
          </div>
        </div>
      </a>
    </div>
  );
};

Goods.defaultProps = {
  rankNum: 1,
  name: '',
  image: '',
  price: '',
  badge: '',
  salePercent: '',
  topRank: false,
};

Goods.propTypes = {
  rankNum: propTypes.number,
  name: propTypes.string,
  image: propTypes.string,
  price: propTypes.string,
  badge: propTypes.string,
  salePercent: propTypes.string,
  topRank: propTypes.bool,
};

export default Goods;
