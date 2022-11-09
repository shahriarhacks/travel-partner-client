import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import AddServices from "../pages/others/AddServices";
import Edit from "../pages/others/Edit";
import Reviews from "../pages/others/Reviews";
import AddReview from "../pages/Services/AddReview";
import Service from "../pages/Services/Service";
import Services from "../pages/Services/Services";
import About from "../pages/shared/About";
import Contact from "../pages/shared/Contact";
import ErrorPage from "../pages/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/packages"),
      },
      {
        path: "/service/:id",
        element: <Service />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/give-review/:id",
        element: <AddReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/add-services",
        element: <AddServices />,
      },
    ],
  },
]);

export default router;
