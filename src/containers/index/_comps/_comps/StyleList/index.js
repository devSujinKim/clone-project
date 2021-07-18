import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AutoPlayIcon } from 'components/Icon';

const useStyles = makeStyles(() => ({
  container: {
    padding: '0 15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wrap: {
    position: 'relative',
    display: 'flex',
    paddingBottom: 4,
    flex: '0 0 calc(100% / 2 - 1.5px)',
    flexDirection: 'column',
    fontSize: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));

const LISTS = [
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img5.jpg',
  },
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img6.jpg',
    icon: <AutoPlayIcon />,
  },
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img6.jpg',
  },
  {
    image: 'https://image.msscdn.net/musinsaUI/homework/coordi/img8.jpg',
    icon: <AutoPlayIcon />,
  },
];

const StyleList = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {LISTS.map(({ image, icon }, i) => (
        <div key={i} className={classes.wrap}>
          <img src={image} alt="코디" />
          <span className={classes.icon}>{icon && icon}</span>
        </div>
      ))}
    </div>
  );
};

export default StyleList;
