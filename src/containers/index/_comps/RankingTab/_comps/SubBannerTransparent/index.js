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
    height: 80,
    borderRadius: 6,
    backgroundColor: '#484848',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  wrap: {
    display: 'flex',
    '& img': {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 'auto',
      height: 90,
    },
  },
  txtWrap: {
    display: 'flex',
    padding: '0 135px 0 15px',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    flexDirection: 'column',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    overflow: 'hidden',
  },
  title: {
    fontSize: 15,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
  },
  desc: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    opacity: 0.65,
  },
}));

const ITEMS = [
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub3.png',
    title: '아디다스 운동화 4,900원',
    desc: '신규 회원 가입 이벤트 참여하기',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub3.png',
    title: '마르지엘라 서머 페스티벌 컬렉션',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub3.png',
    title: '손 피부를 보호해줄 핸드크림 추천 랭킹',
    desc: '신규 회원 가입 이벤트 참여하기',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub3.png',
    title: '마르지엘라 서머 페스티벌 컬렉션',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/sub3.png',
    title: '손 피부를 보호해줄 핸드크림 추천 랭킹',
  },
];

const SubBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.swiperWrap}>
      <SwiperSlider swiperClassName={classes.swiper} speed={1000}>
        {ITEMS.map(({ src, title, desc }, index) => (
          <SwiperSlide className={classes.swiperSlide} key={index}>
            <div className={classes.wrap}>
              <div className={classes.txtWrap}>
                <p className={classes.title}>{title}</p>
                {desc && <p className={classes.desc}>{desc}</p>}
              </div>
              <img src={src} alt="서브 배너" />
            </div>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
};

export default SubBanner;
