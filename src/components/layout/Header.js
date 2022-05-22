import Link from 'next/link';
import Gnb from './Gnb';

const Header = () => {
  return (
    <>
      <Link href="/">
        <a>
          <div>헤덜~</div>
        </a>
      </Link>
      <Gnb />
    </>
  );
};

export default Header;
