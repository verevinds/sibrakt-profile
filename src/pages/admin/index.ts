import { GetServerSideProps } from "next";
import { ROUTE_ADMIN_DEFAULT } from "src/utils/route";

const AdminPage = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: ROUTE_ADMIN_DEFAULT,
    permanent: false,
  },
});
export default AdminPage;
