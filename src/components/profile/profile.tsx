import { useMeProfile } from "src/hooks/api/useMeProfile";

const Profile = (): JSX.Element => {
  const {data: meProfile} = useMeProfile();
  return (
    <>
      {meProfile?._id}
      {meProfile?.role}
      {meProfile?.score}
      {meProfile?.phone}
    </>
  );
}

export default Profile;