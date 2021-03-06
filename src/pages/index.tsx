import type { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import Hero from '@sections/Home/Hero/Hero';
import Services from '@sections/Home/Services/Services';
import Blogs from '@sections/Home/Blogs/Blogs';
import Contact from '@sections/Home/Contact/Contact';
import content from '@utils/textContent';

const Home: NextPage = () => {
  const { hero, services, blogs } = content;
  return (
    <Layout>
      <Hero content={hero} />
      <Services content={services} />
      <Blogs content={blogs} />
      <Contact />
    </Layout>
  );
};

export default Home;
