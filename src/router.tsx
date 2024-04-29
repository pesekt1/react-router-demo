import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routing/HomePage";
import UserListPage from "./routing/UserListPage";
import ContactPage from "./routing/ContactPage";
import UserDetailPage from "./routing/UserDetailPage";
import Layout from "./routing/Layout";
import UsersPage from "./routing/UsersPage";
import ErrorPage from "./routing/ErrorPage";
import LoginPage from "./routing/LoginPage";
import PrivateRouters from "./routing/PrivateRouters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/contacts", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <PrivateRouters />,
    children: [
      {
        path: "/users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
    ],
  },
]);
export default router;
