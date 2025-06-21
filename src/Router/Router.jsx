import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/signIn/SignIn";
import Categories from "../Pages/Categories/Categories";
import Products from "../Pages/Products/Products";
import ShowProducts from "../Pages/Products/ShowProducts";
import { Suspense } from "react";


const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "categories",
        Component: Categories,
        
      },
      {
        path: "products",
        Component: Products,
        children: [
          {
            path: "showProducts",
            Component: ShowProducts
            
          },
        ],
      },
    ],
  },
]);

export default Router;
