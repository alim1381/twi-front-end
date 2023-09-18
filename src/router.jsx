import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ViewAllPosts from "./pages/posts/ViewAllPosts";
import Login from "./pages/register/Login";
import Register from "./pages/register/Register";
import PriveteRoutes from "./auth/PriveteRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PriveteRoutes>
        <MainLayout />
      </PriveteRoutes>
    ),
    children: [
      {
        path: "posts",
        element: <ViewAllPosts />,
      },
      {
        path: "messages",
        element: <ViewAllPosts />,
      },
      {
        path: "profile",
        element: <ViewAllPosts />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
