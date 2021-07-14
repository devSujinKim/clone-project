import dynamic from 'next/dynamic';

const BellIcon = dynamic(() => import('./components/BellIcon'));
const CartIcon = dynamic(() => import('./components/CartIcon'));
const HeartIcon = dynamic(() => import('./components/HeartIcon'));

export { BellIcon, CartIcon, HeartIcon };
