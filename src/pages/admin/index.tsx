import AdminLayout from "src/components/admin-layout";
import AppLayout from "src/components/app-layout";
import Dashboard from 'src/components/dashboard';

export default function AdminPage() {
  return (
    <AppLayout>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </AppLayout>
  );
}
