import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '10px 0',
    overflowX: 'auto',
    overflow: 'hidden',
  },
  tabsWrap: {
    position: 'relative',
    display: 'flex',
    '&:after': {
      content: '""',
      display: 'block',
      width: 16,
      flexShrink: 0,
    },
  },
  scrollable: {},
  scroller: {},
  tabBtn: {
    display: 'flex',
    flex: '0 0 auto',
    alignItems: 'center',
    margin: '0 4px',
    padding: '5px 10px',
    fontSize: 14,
    color: theme.palette.grey[600],
    border: `1px solid ${theme.palette.grey[600]}`,
    backgroundColor: theme.palette.background.default,
    borderRadius: 4,
    '&:first-child': {
      marginLeft: 15,
    },
  },
  selected: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    border: '1px solid #000',
  },
}));

const TABS = [
  {
    label: '전체',
  },
  {
    label: '상의',
  },
  {
    label: '아우터',
  },
  {
    label: '바지',
  },
  {
    label: '신발',
  },
  {
    label: '스니커즈',
  },
  {
    label: '양말',
  },
  {
    label: '모자',
  },
];

const SubTab = () => {
  const classes = useStyles();

  // active된 탭메뉴 좌측 정렬
  const [selectedTab, setSelectedTab] = useState(0);
  const scrollToLeft = () => {
    document.querySelector(`.${classes.selected}`).scrollTo(0, 0);
  };

  const tabsChanged = (index) => {
    setSelectedTab(index);
    scrollToLeft();
  };

  useEffect(() => {
    // const viewportWidth = window.innerWidth;
    // const scrollerWrap = document
    //   .querySelector(`.${classes.scroller}`)
    //   .scroll(0, 0);
    // const selectedTabWidth = document.querySelector(`.${classes.selected}`)
    //   .offsetWidth;
    // const selectedOffsetLeft = document.querySelector(`.${classes.selected}`)
    //   .offsetLeft;
    // const scrollLeftValue =
    //   selectedOffsetLeft + selectedTabWidth / 2 - viewportWidth / 2;
    // const aniScrollTo = () => {
    // // };
    // console.log(selectedTab);
    // const safariScroll = (duration) => {
    //   const currentScrollLeft = scrollerWrap.scrollLeft;
    //   function animateSafariScrollTo(startX, endX, duration) {
    //     const unitX = (scrollLeftValue - currentScrollLeft) / duration;
    //     const startTime = new Date().getTime();
    //     const endTime = new Date().getTime() + duration;
    //     const scrollTo = () => {
    //       const now = new Date().getTime();
    //       const passed = now - startTime;
    //       if (now <= endTime) {
    //         scrollerWrap.scrollLeft = currentScrollLeft + unitX * passed;
    //         requestAnimationFrame(scrollTo);
    //       }
    //     };
    //     requestAnimationFrame(scrollTo);
    //   }
    //   animateSafariScrollTo(currentScrollLeft, scrollLeftValue, duration);
    // };
    // setTimeout(() => {
    //   if ('scrollBehavior' in document.documentElement.style) {
    //     aniScrollTo();
    //   } else {
    //     safariScroll(300);
    //   }
    // }, 310);
    // setTimeout(() => {
    //   const scrollerCurrentLeft = scrollerWrap.scrollLeft;
    //   const isStartPosition = scrollLeftValue <= 0 && scrollerCurrentLeft === 0;
    //   if (!isStartPosition) {
    //     if ('scrollBehavior' in document.documentElement.style) {
    //       aniScrollTo();
    //     } else {
    //       safariScroll(300);
    //     }
    //   }
    // }, 650);
  }, [selectedTab]);

  return (
    <div className={classes.root}>
      <div
        className={clsx(
          classes.tabsWrap,
          classes.scrollable,
          classes.scroller,
          classes.flexContainer
        )}
      >
        {TABS.map((tab, index) => (
          <button
            type="button"
            key={tab.label}
            onClick={() => tabsChanged(index)}
            className={clsx(
              classes.tabBtn,
              selectedTab === index && classes.selected
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubTab;
