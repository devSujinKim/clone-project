import dynamic from 'next/dynamic';

const ArrowRightIcon = dynamic(() => import('./components/ArrowRightIcon'));
const AutoPlayIcon = dynamic(() => import('./components/AutoPlayIcon'));
const BellIcon = dynamic(() => import('./components/BellIcon'));
const CartIcon = dynamic(() => import('./components/CartIcon'));
const FilterIcon = dynamic(() => import('./components/FilterIcon'));
const HeartIcon = dynamic(() => import('./components/HeartIcon'));

export {
  ArrowRightIcon,
  AutoPlayIcon,
  BellIcon,
  CartIcon,
  FilterIcon,
  HeartIcon,
};
