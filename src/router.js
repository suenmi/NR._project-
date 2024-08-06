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
import Home from "./page/Home";
import ShowItem from "./page/ShowItem";

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
        }
    ]
  },
]);

export default router