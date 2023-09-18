import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ViewAllPosts from "./pages/posts/ViewAllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
]);

export default router;
