import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// Sahifalarni lazy load qilish
const CreateProductPage = lazy(() => import("./pages/CreateProduct"));
const ManageProductPage = lazy(() => import("./pages/ManageProducts"));
const CreateCategoryPage = lazy(() => import("./pages/CreateCategory"));
const ManageCategoryPage = lazy(() => import("./pages/ManageCategory"));

// Yuklanish vaqtida ko'rinadigan oddiy Loader
const PageLoader = () => (
  <div style={{ padding: "20px", textAlign: "center", fontSize: "18px" }}>
    Loading...
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Asosiy sahifaga kirganda avtomatik Manage sahifasiga yuborish */}
          {/* <Route index element={<Navigate to="/manage-product" replace />} /> */}

          <Route path="create-product" element={<CreateProductPage />} />
          <Route path="manage-product" element={<ManageProductPage />} />
          <Route path="create-category" element={<CreateCategoryPage />} />
          <Route path="manage-category" element={<ManageCategoryPage />} />

          {/* Kelajakda category sahifalarini ham shu yerga qo'shasiz */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
