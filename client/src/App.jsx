import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// importing the pages for the routes
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { Product } from "./pages/Product/Product";

// importing component
import { Navbar } from "./components/Navbar/Navbar";

import "./App.scss";

// Implementing the fixed components for the website
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

// Creating the routes for each page
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
