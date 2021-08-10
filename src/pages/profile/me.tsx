import AppLayout from "src/components/app-layout/app-layout";
import ProfileLayout from "src/screens/profile/profile-layout";
import Profile from "src/screens/profile/profile-me";

const ProfileMePage = () => {
  return (
    <AppLayout>
      <ProfileLayout>
        <Profile />
      </ProfileLayout>
    </AppLayout>
  );
};

export default ProfileMePage;
