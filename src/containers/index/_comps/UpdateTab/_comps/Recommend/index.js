import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import recommend from 'mocks/recommend';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px 15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flex: '0 0 calc(100% / 2 - 1.5px)',
    display: 'flex',
    fontSize: 0,
    flexDirection: 'column',
    paddingBottom: 25,
    '& a': {
      '& img': {
        width: '100%',
        height: 'auto',
      },
    },
  },
  infoWrap: {
    paddingTop: 10,
  },
  title: {
    paddingBottom: 3,
    fontSize: 15,
    color: '#000',
  },
  txt: {
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
  txtBlue: {
    color: '#0078FF',
  },
}));

const Recommend = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {recommend.map(({ image, title, brand, comment, accent }, i) => (
        <div className={classes.item} key={i}>
          <a href="/">
            <img src={image} alt="코디" />
            <div className={classes.infoWrap}>
              <p className={classes.title}>{title}</p>
              <p className={classes.txt}>
                {brand}
                <span className={classes.circle} />
                {accent ? (
                  <span className={classes.txtBlue}>{comment}</span>
                ) : (
                  <span>{comment}</span>
                )}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
