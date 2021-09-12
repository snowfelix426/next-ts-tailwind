import type { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import Hero from '@sections/Home/Hero/Hero';
import content from '@utils/textContent';

const Home: NextPage = () => {
  const { hero } = content;
  return (
    <Layout>
      <Hero content={hero} />
    </Layout>
  );
};

export default Home;
