import type { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import Hero from '@sections/Home/Hero/Hero';
import Services from '@sections/Home/Services/Services';
import content from '@utils/textContent';

const Home: NextPage = () => {
  const { hero, services } = content;
  return (
    <Layout>
      <Hero content={hero} />
      <Services content={services} />
    </Layout>
  );
};

export default Home;
