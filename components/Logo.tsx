import { Link } from 'next-view-transitions';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <img
        src="/logo-white.png"
        alt="OneTask Logo"
        className="h-6 hidden dark:block m-0"
      />
      <img
        src="/logo-black.png"
        alt="OneTask Logo"
        className="h-6 dark:hidden m-0"
      />
    </Link>
  );
};
