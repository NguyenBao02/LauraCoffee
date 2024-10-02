import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "../src/Component/Content/Homepage.js";
import Content from "../src/Component/Content/Content.js";
import News from "./Component/Content/News.js";
import Prod from "./Component/Content/Prod.js";
import ProdHaThao from "./Component/Content/ProdHaThao.js";
import ProdLinhChi from "./Component/Content/ProdLinhChi.js";
import Contact from "./Component/Content/Contact.js";
import Contest from "./Component/Content/Contest.js";
import Introduce from "./Component/Content/Introduce.js";
import Benefit from "./Component/Content/Benefit.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Content />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "news",
                element: <News />
            },
            {
                path: "products",
                element: <Prod />
            },
            {
                path: "products/ha-thao",
                element: <ProdHaThao />
            },
            {
                path: "products/linh-chi",
                element: <ProdLinhChi />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "contest",
                element: <Contest />
            },
            {
                path: "introduce",
                element: <Introduce />
            },
            {
                path: "benefit",
                element: <Benefit />
            },
        ],
    },
]);


const Layout = (props) => {
    return (
        <RouterProvider router={router} />
    )
}

export default Layout;