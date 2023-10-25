import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Authenticate = React.lazy(() => import("../pages/Authenticate"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    status: false,
  },
  {
    id: 2,
    path: "/auth",
    element: <Authenticate />,
    status: false,
  },
];

export default allRoutes;
