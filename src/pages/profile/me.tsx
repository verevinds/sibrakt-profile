import AppLayout from "src/components/app-layout/app-layout";
import ProfileLayout from "src/components/profile-layout";
import Profile from "src/components/profile";

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
