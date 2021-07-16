/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
  },
  swiper: {
    width: '100%',
    overflow: 'hidden',
    '&, & .swiper-wrapper': {
      display: 'flex',
      zIndex: 'auto',
    },
    '& .swiper-pagination': {
      display: 'flex',
      margin: '0 auto',
      position: 'absolute',
      zIndex: 10,
    },
    '& .swiper-pagination-bullet': {
      ovrflow: 'hidden',
      textIndent: '-1000em',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    '& .swiper-button-prev, & .swiper-button-next': {
      position: 'absolute',
      zIndex: 10,
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
    },
  },
}));

const SwiperSlider = ({ children, swiperClassName, ...props }) => {
  const classes = useStyles();

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <div className={classes.root}>
      <Swiper
        className={clsx(classes.swiper, swiperClassName)}
        navigation
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        {...props}
      >
        {children}
      </Swiper>
    </div>
  );
};

SwiperSlider.defaultPropTypes = {
  swiperClassName: null,
};

SwiperSlider.propTypes = {
  swiperClassName: propTypes.string,
  children: propTypes.any.isRequired,
};

export default SwiperSlider;
