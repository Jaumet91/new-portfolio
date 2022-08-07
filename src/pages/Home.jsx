import { Details } from '../components/Details';
import { Layout } from '../components/layout';
import { Works } from '../components/Works';

export const Home = () => {
  return (
    <Layout>
      <Details />
      <Works />
    </Layout>
  );
};
