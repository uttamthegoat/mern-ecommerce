import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Authenticate = React.lazy(() => import("../pages/Authenticate"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Orders = React.lazy(() => import("../pages/Orders"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Wishlist = React.lazy(() => import("../pages/Wishlist"));
const Redirect = React.lazy(() => import("../pages/Redirect"));

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
  {
    id: 3,
    path: "/profile",
    element: <Profile />,
    status: false,
  },
  {
    id: 4,
    path: "/order",
    element: <Orders />,
    status: false,
  },
  {
    id: 5,
    path: "/cart",
    element: <Cart />,
    status: false,
  },
  {
    id: 6,
    path: "/wishlist",
    element: <Wishlist />,
    status: false,
  },
  {
    id: 7,
    path: "*",
    element: <Redirect />,
    status: false,
  },
];

export default allRoutes;
