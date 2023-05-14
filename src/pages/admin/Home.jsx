import React from "react";
import { AdminPageLayout } from "../../components/admin/AdminPageLayout";
import { Dashboard } from "../../components/admin/Dashboard";

export const AdminPanel = () => {
  return (
    <AdminPageLayout>
      <Dashboard />
    </AdminPageLayout>
  );
};
