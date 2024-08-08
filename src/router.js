import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App"
import About from "./page/About";
import ShowItem from "./page/ShowItem";
import CategoryPage from "./page/CategoryPage";
import Home from "./page/Home";
import ContactsPage from "./page/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, 
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: "about",
            Component: About
        },
        {
          path: "showitem/:id",
          Component: ShowItem
        },
        {
          path: "category/:id",
          Component: CategoryPage
        },
        {
          path: "contacts",
          Component: ContactsPage
        }
    ]
  },
]);

export default router