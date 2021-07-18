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
  const tabsChanged = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const scrollerWrap = document.querySelector(`.${classes.scroller}`);
    const selectedTab = document.querySelector(`.${classes.selected}`);

    let scrollLeftValue;
    const targetLeft = 0;
    const selectedTabPos = targetLeft + selectedTab.offsetWidth / 2;
    if (selectedTabPos <= viewportWidth / 2) {
      scrollLeftValue = 0;
    } else if (0 - selectedTabPos <= viewportWidth / 2) {
      scrollLeftValue = 0 - scrollerWrap.offsetWidth;
    }
    selectedTab.scrollTo({
      left: scrollLeftValue,
    });
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
