import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import { RouterProvider } from "react-router";
import Signup from "./Component/Signup.jsx";
import AllUser from "./Component/AllUser.jsx";
import SingleUser from "./Component/SingleUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'allusers',
        element: <AllUser></AllUser>
      },
      {
        path: '/users/:id',
        element: <SingleUser></SingleUser>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
