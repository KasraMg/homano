import Home from "./pages/home/home";
import Shop from "./pages/shop/shop"
import Product from "./pages/product/product";
import ContactUs from "./pages/contact-us/contact-us"
import ShoppingCart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";
import OrderComplete from "./pages/order-complete/order-complete";
import Blogs from "./pages/blogs/blogs";
import Blog from "./pages/blogs/blog/blog";
import Dashboard from "./pages/user-panel/dashboard/dashboard";
import Address from "./pages/user-panel/address/Address";
import Orders from "./pages/user-panel/orders/orders";
import Favorites from "./pages/user-panel/favorites/favorties";
import Tickets from "./pages/user-panel/tickets/tickets";
import Account from "./pages/user-panel/acount/account";
import { Navigate } from "react-router-dom";
import UserPanelLayout from "./pages/user-panel/layout";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/product/:code/:slug', element: <Product /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/cart', element: <ShoppingCart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/order-complete', element: <OrderComplete /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <Blog /> },
    {
        path: '/user-panel',
        element: <UserPanelLayout />,
        children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "address", element: <Address /> },
            { path: "orders", element: <Orders /> },
            { path: "favorites", element: <Favorites /> },
            { path: "tickets", element: <Tickets /> },
            { path: "account", element: <Account /> },
        ]
    },

]

export default routes;