import AdminLayout from "src/components/admin-layout";
import AppLayout from "src/components/app-layout/app-layout";

export default function AdminPage() {
  return (
    <AppLayout>
      <AdminLayout>Content</AdminLayout>
    </AppLayout>
  );
}
