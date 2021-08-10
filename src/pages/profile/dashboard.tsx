import AppLayout from "src/components/app-layout/app-layout";
import ProfileDashboard from "src/screens/profile/profile-dashboard";
import ProfileLayout from "src/screens/profile/profile-layout";

const ProfileDashboardPage = () => {
  return (
    <AppLayout>
      <ProfileLayout>
        <ProfileDashboard />
      </ProfileLayout>
    </AppLayout>
  );
};

export default ProfileDashboardPage;
