import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Login = React.lazy(() => import("../pages/Login"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    status: false,
  },
  {
    id: 2,
    path: "/signup",
    element: <Signup />,
    status: false,
  },
  {
    id: 3,
    path: "/login",
    element: <Login />,
    status: false,
  },
];

export default allRoutes;
