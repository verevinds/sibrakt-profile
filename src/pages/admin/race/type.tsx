import AdminLayout from "src/components/admin-layout";
import AppLayout from "src/components/app-layout/app-layout";
import RaceType from "src/components/race-type";

export default function AdminRaceTypePage() {
  return (
    <AppLayout>
      <AdminLayout>
        <RaceType />
      </AdminLayout>
    </AppLayout>
  );
}
