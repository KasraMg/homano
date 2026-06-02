import Home from "./pages/home/home";
import Shop from "./pages/shop/shop"
import Product from "./pages/product/product";
import ContactUs from "./pages/contact-us/contact-us"
import ShoppingCart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";
import OrderComplete from "./pages/order-complete/order-complete";
import Blogs from "./pages/blogs/blogs";
import UserPanel from "./pages/UserPanel/Index";
import Account from "./pages/UserPanel/account/Account";
import Address from "./pages/UserPanel/address/Address";
import Orders from "./pages/UserPanel/orders/Orders";
import Wishlist from "./pages/UserPanel/wishlist/Wishlist";
import Blog from "./pages/blogs/blog/blog";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/product/:id', element: <Product /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/cart', element: <ShoppingCart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/order-complete', element: <OrderComplete /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <Blog /> },
    {
        path: '/my-account/*',
        element: <UserPanel />,
        children: [
            { path: "account", element: <Account /> },
            { path: "address", element: <Address /> },
            { path: "orders", element: <Orders /> },
            { path: "wishlist", element: <Wishlist /> },
        ]
    }
]

export default routes;