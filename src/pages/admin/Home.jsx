import React from "react";
import { PageLayout } from "../../components/admin/AdminPageLayout";
import { Dashboard } from "../../components/admin/Dashboard";

export const AdminPanel = () => {
  return (
    <PageLayout>
      <Dashboard />
    </PageLayout>
  );
};
