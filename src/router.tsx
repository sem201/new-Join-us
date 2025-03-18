import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { Main } from "@components/apply/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "", element: <Main></Main> }],
  },
]);
