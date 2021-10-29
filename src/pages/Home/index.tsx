import Guide from '@/components/Guide';
import useUrlState from '@ahooksjs/use-url-state';

const Home = () => {
  console.log(useUrlState());
  return <Guide />;
};

export default Home;
