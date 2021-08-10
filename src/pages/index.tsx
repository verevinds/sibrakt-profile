import { GetServerSideProps } from "next";
import { ROUTE_DEFAULT } from "src/utils/route";

const Home = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: ROUTE_DEFAULT,
    permanent: false,
  },
});
export default Home;
