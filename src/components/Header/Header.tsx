import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return null;

      if (window.pageYOffset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${
        isSticky ? 'bg-gray-600' : 'bg-secondary'
      } fixed top-0 left-0 w-full z-1000 transition	ease-in-out`}
    >
      <div className="w-full px-4 py-6 lg:px-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <div className="transition ease-in-out lg:text-center">
              <Link href="/" passHref>
                <a className="inline-flex">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo-icon"
                    width={157}
                    height={36}
                  />
                </a>
              </Link>
            </div>

            <div className="ml-3 text-right lg:ml-0">
              <div className="text-base text-white underline transition ease-in-out lg:text-xl">
                Partner with VICE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
