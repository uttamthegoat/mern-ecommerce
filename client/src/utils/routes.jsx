import React from "react";
import Orderinfo from "../pages/Orderinfo";
const Home = React.lazy(() => import("../pages/Home"));
const Authenticate = React.lazy(() => import("../pages/Authenticate"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Orders = React.lazy(() => import("../pages/Orders"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Wishlist = React.lazy(() => import("../pages/Wishlist"));
const Search = React.lazy(() => import("../pages/Search"));
const ProductPage = React.lazy(() => import("../pages/ProductPage"));

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
    path: "/orders",
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
    path: "/product-page/:id",
    element: <ProductPage />,
    status: false,
  },
  {
    id: 8,
    path: "/search",
    element: <Search />,
    status: false,
  },
  {
    id: 8,
    path: "/orderinfo",
    element: <Orderinfo />,
    status: false,
  },
];
export default allRoutes;
