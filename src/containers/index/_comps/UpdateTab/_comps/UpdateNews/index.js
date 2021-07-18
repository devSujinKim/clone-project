/* eslint-disable array-callback-return */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import updateFirst from 'mocks/updateFirst';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 15px',
  },
  item: {
    marginBottom: 30,
  },
  productsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrap: {
    margin: '0 3px 4px 0',
    display: 'flex',
    flex: '0 0 calc((100% - 9px) / 4)',
    '&:nth-child(4n+0)': {
      marginRight: 0,
    },
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  linkWrap: {
    display: 'flex',
    flex: '0 0 calc((100% - 9px) / 4)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& a': {
      padding: '0 11px',
      display: 'block',
    },
  },
  productsQty: {
    fontSize: 10,
    color: '#000',
    '& span': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      verticalAlign: 'middle',
    },
  },
  allBtn: {
    padding: '2px 8px',
    border: '1px solid #ccc',
    borderRadius: 4,
    fontSize: 12,
    color: '#000',
  },
  updateInfo: {
    paddingTop: 5,
  },
  title: {
    fontSize: 15,
  },
  info: {
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
}));

const UpdateNews = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {updateFirst.map(({ images, goToPage, title, time, comment }, i) => (
        <div key={i} className={classes.item}>
          <ul className={classes.productsWrap}>
            {images.map((image, i) => (
              <li className={classes.imageWrap} key={i}>
                <img src={image} alt="상품" />
              </li>
            ))}
            {goToPage && (
              <li className={classes.linkWrap}>
                <a href="/">
                  <p className={classes.productsQty}>
                    <span>33</span>개 상품
                  </p>
                  <p className={classes.allBtn}>전체보기</p>
                </a>
              </li>
            )}
          </ul>
          <div className={classes.updateInfo}>
            <p className={classes.title}>{title}</p>
            <p className={classes.info}>
              {time}
              <span className={classes.circle} />
              <span>{comment}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpdateNews;
