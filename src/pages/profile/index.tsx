import { GetServerSideProps } from "next";
import { ROUTE_PROFILE_DEFAULT } from "src/utils/route";

const ProfilePage = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: ROUTE_PROFILE_DEFAULT,
    permanent: false,
  },
});
export default ProfilePage;
