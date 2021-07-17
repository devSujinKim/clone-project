import dynamic from 'next/dynamic';

const ArrowRightIcon = dynamic(() => import('./components/ArrowRightIcon'));
const BellIcon = dynamic(() => import('./components/BellIcon'));
const CartIcon = dynamic(() => import('./components/CartIcon'));
const FilterIcon = dynamic(() => import('./components/FilterIcon'));
const HeartIcon = dynamic(() => import('./components/HeartIcon'));

export { ArrowRightIcon, BellIcon, CartIcon, FilterIcon, HeartIcon };
