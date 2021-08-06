import AdminLayout from "src/components/admin-layout";
import AppLayout from "src/components/app-layout/app-layout";
import Race from "src/components/race";

export default function AdminRacePage() {
  return (
    <AppLayout>
      <AdminLayout>
        <Race />
      </AdminLayout>
    </AppLayout>
  );
}
