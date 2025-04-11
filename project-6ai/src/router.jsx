import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Garant from "./pages/Garant";
import Dostavka from "./pages/Dostavka";
import Komponi from "./pages/Komponi";
import Kontact from "./pages/Kontact";
import Madel from "./pages/Madel";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "garant",
        element: <Garant />,
      },
      {
        path: "dostavka",
        element: <Dostavka />,
      },
      {
        path: "komponi",
        element: <Komponi />,
      },
      {
        path: "kontact",
        element: <Kontact />,
      },
      {
        path: "model/:brand",  // теперь будет передаваться бренд, а не id
        element: <Madel />,
      }
      
    ],
  },
]);
