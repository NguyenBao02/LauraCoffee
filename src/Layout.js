import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "../src/Component/Content/Homepage.js";
import Content from "../src/Component/Content/Content.js";
import News from "./Component/Content/News.js";
import Prod from "./Component/Content/Prod.js";
import Contact from "./Component/Content/Contact.js";
import Contest from "./Component/Content/Contest.js";

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
                path: "contact",
                element: <Contact />
            },
            {
                path: "contest",
                element: <Contest />
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