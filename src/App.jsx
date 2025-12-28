import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Loader from "./components/Loader";

const CreateProductPage = lazy(() => import("./pages/CreateProduct"));
const ManageProductPage = lazy(() => import("./pages/ManageProducts"));
const CreateCategoryPage = lazy(() => import("./pages/CreateCategory"));
const ManageCategoryPage = lazy(() => import("./pages/ManageCategory"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route path="create-product" element={<CreateProductPage />} />
          <Route path="manage-product" element={<ManageProductPage />} />
          <Route path="create-category" element={<CreateCategoryPage />} />
          <Route path="manage-category" element={<ManageCategoryPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
