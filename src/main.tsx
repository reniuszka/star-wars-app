import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context/context";
import Character from "./components/Character";
import RootLayout from "./routes/RootLayout";
import MyErrorElement from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <MyErrorElement />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "character",
        children: [
          {
            path: ":character",
            element: <Character />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
