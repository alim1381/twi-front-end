import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ViewAllPosts from "./pages/posts/ViewAllPosts";
import Login from "./pages/register/Login";
import Register from "./pages/register/Register";
import PriveteRoutes from "./auth/PriveteRoutes";
import RegistersRoutes from "./auth/RegistersRoutes";
import Logout from "./pages/logout/Logout";
import ProfilePage from "./pages/profile/ProfilePage";
import Error500 from "./components/error/Error500";

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
        index: true,
        element: <ViewAllPosts />,
      },
      {
        path: "messages",
        element: <ViewAllPosts />,
      },
      {
        path: "profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "/error",
        element: <Error500 />,
      },

      // redirects
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
      {
        path: "",
        element: <Navigate to={"/posts"} />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <RegistersRoutes>
            <Login />
          </RegistersRoutes>
        ),
        errorElement: <Login />,
      },
      {
        path: "register",
        element: (
          <RegistersRoutes>
            <Register />
          </RegistersRoutes>
        ),
      },
    ],
  },
]);

export default router;
