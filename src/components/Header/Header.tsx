import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ mode = 'white' }) => {
  const [isSticky, setSticky] = useState(false);
  const [headerMode, setHeaderMode] = useState(mode);

  return (
    <div
      className={`${
        isSticky ? 'bg-sticky-light' : ''
      } fixed top-0 left-0 w-full z-1000 transition	ease-in-out`}
    >
      <div className="w-full p-6 lg:px-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row-reverse items-center justify-between w-full lg:grid lg:grid-cols-12 lg:gap-5">
            <div className="transition ease-in-out lg:col-start-5 xl:col-start-4 lg:col-span-4 xl:col-span-6 lg:text-center">
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

            <div className="hidden lg:block lg:col-start-9 lg:col-span-4 xl:col-start-10 xl:col-span-3 lg:text-right">
              <div
                className={`${
                  headerMode === 'black' ? 'text-black' : 'text-white'
                } text-base underline lg:text-xl transition	ease-in-out`}
              >
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
