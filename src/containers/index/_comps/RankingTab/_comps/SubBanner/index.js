import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwiperSlide } from 'swiper/react';
import SwiperSlider from 'components/SwiperSlider';

const useStyles = makeStyles((theme) => ({
  swiperWrap: {
    padding: '60px 0',
  },
  swiper: {
    padding: '0 0 16px',
    '& .swiper-pagination': {
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'auto',
      bottom: 0,
    },
    '& .swiper-pagination-bullet': {
      width: 6,
      height: 6,
      margin: '0 4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[500],
      opacity: 0.5,
    },
    '& .swiper-pagination-bullet-active': {
      width: 6,
      height: 6,
      backgroundColor: '#000',
      opacity: 1,
    },
  },
  swiperSlide: {
    position: 'relative',
    borderRadius: 6,
    backgroundColor: theme.palette.grey[100],
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  wrap: {
    display: 'flex',
    '& img': {
      width: 'auto',
      height: 90,
      borderRadius: '6px 0 0 6px',
    },
  },
  txtWrap: {
    margin: 'auto',
    padding: '0 15px',
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: theme.typography.fontWeightMedium,
  },
  date: {
    paddingTop: 3,
    fontSize: 12,
    color: theme.palette.grey[700],
  },
}));

const ITEMS = [
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub1.jpg',
    title: '손 피부를 보호해줄 핸드크림 추천 랭킹',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub2.jpg',
    title: '마르지엘라 서머 페스티벌 컬렉션',
    date: '6.28 - 7.23',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub1.jpg',
    title: '손 피부를 보호해줄 핸드크림 추천 랭킹',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub2.jpg',
    title: '마르지엘라 서머 페스티벌 컬렉션',
    date: '6.28 - 7.23',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub1.jpg',
    title: '손 피부를 보호해줄 핸드크림 추천 랭킹',
  },
];

const SubBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.swiperWrap}>
      <SwiperSlider swiperClassName={classes.swiper} speed={1000}>
        {ITEMS.map(({ src, title, date }, index) => (
          <SwiperSlide className={classes.swiperSlide} key={index}>
            <div className={classes.wrap}>
              <img src={src} alt="서브 배너" />
              <div className={classes.txtWrap}>
                <p className={classes.title}>{title}</p>
                {date && <p className={classes.date}>{date}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
};

export default SubBanner;
