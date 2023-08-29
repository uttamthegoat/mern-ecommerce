import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Login = React.lazy(() => import("../pages/Login"));

export default routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/signup",
    element: <Signup />,
  },
  {
    id: 3,
    path: "/login",
    element: <Login />,
  },
];
