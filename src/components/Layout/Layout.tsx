import React from 'react';
import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

export interface ILayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const Layout = ({
  title = 'Sunnybyte Landing Page',
  children,
}: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Landing page demo" />
      </Head>

      <Header />

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
