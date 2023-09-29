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
import FollowersAndFollowing from "./pages/followersAndFollowing/FollowersAndFollowing";
import PostComment from "./pages/comment/PostComment";
import SearchPage from "./pages/search/SearchPage";
import AllChatsPage from "./pages/chats/AllChatsPage";
import OneChatPage from "./pages/chats/OneChatPage";
import TagPage from "./pages/tag/TagPage";
import ChangePass from "./pages/changePass/ChangePass";
import EditProfile from "./pages/editProfile/EditProfile";

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
        element: <AllChatsPage />,
      },
      {
        path: "messages/:chatId",
        element: <OneChatPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "editprofile",
        element: <EditProfile />,
      },
      {
        path: "changepass",
        element: <ChangePass />,
      },
      {
        path: "followers/:id",
        element: <FollowersAndFollowing />,
      },
      {
        path: "following/:id",
        element: <FollowersAndFollowing />,
      },
      {
        path: "comments/:postId",
        element: <PostComment />,
      },
      {
        path: "tag/:tag",
        element: <TagPage />,
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
