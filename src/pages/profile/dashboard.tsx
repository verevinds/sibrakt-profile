import AppLayout from "src/components/app-layout/app-layout";
import ProfileLayout from "src/components/profile-layout";
import Profile from "src/components/profile";
import Dashboard from "src/components/dashboard";

const ProfileDashboardPage = () => {
  return (
    <AppLayout>
      <ProfileLayout>
        <Dashboard />
      </ProfileLayout>
    </AppLayout>
  );
};

export default ProfileDashboardPage;
