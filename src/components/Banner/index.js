import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwiperSlide } from 'swiper/react';
import Typography from '@material-ui/core/Typography';
import SwiperSlider from 'components/SwiperSlider';

const useStyles = makeStyles((theme) => ({
  swiper: {
    '& .swiper-pagination': {
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'auto',
      bottom: 25,
    },
    '& .swiper-pagination-bullet': {
      width: 6,
      height: 6,
      margin: '0 4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.default,
      opacity: 0.5,
    },
    '& .swiper-pagination-bullet-active': {
      width: 6,
      height: 6,
      backgroundColor: theme.palette.background.default,
      opacity: 1,
    },
  },
  swiperSlide: {
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
    },
    '&.swiper-slide-active $titleWrap': {
      animation: '$slideUp 1s 0.6s both',
    },
  },
  category: {
    position: 'absolute',
    top: 40,
    left: 25,
    width: 'calc(100% - 50px)',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: theme.palette.text.secondary,
    fontSize: '15px',
    fontWeight: theme.typography.fontWeightBold,
  },
  titleWrap: {
    position: 'absolute',
    bottom: '16.5%',
    left: 25,
    width: 'calc(100% - 50px)',
    color: theme.palette.text.secondary,
    '& h3': {
      paddingBottom: 10,
      maxWidth: 220,
      fontSize: 30,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.3,
    },
    '& p': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: 14,
    },
  },
  '@keyframes slideUp': {
    '0%': { opacity: 0, transform: 'translate(0, 0)' },
    '100%': { opacity: 1, transform: 'translate(0, -16.5%)' },
  },
}));

const ITEMS = [
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/img1.jpg',
    category: 'Showcase',
    title: '쿠어 21 S/S\n신상품 한정 발매',
    subTitle: '신상품 증정 이벤트',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/img2.jpg',
    category: 'Showcase',
    title: '인사일런스 우먼 프로젝트 성수',
    subTitle: '성수 티셔츠 선발매 및 21 S/S 최대 15% 할인',
  },
  {
    src: 'https://image.msscdn.net/musinsaUI/homework/banner/img3.jpg',
    category: 'Open',
    title: 'BOUTIQUE Grand Open',
    subTitle: '무신사가 선보이는 럭셔리 편집숍 오픈 기념 이벤트 ',
  },
];

const Banner = () => {
  const classes = useStyles();

  return (
    <SwiperSlider
      swiperClassName={classes.swiper}
      // autoplay={{ delay: 4000 }}
      speed={1300}
    >
      {ITEMS.map(({ src, category, title, subTitle }) => (
        <SwiperSlide className={classes.swiperSlide} key={title}>
          <p className={classes.category}>{category}</p>
          <img src={src} alt="배너" />
          <div className={classes.titleWrap}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{subTitle}</Typography>
          </div>
        </SwiperSlide>
      ))}
    </SwiperSlider>
  );
};

export default Banner;
