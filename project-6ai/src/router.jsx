import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Garant from "./pages/Garant";
import Dostavka from "./pages/Dostavka";
import Komponi from "./pages/Komponi";
import Kontact from "./pages/Kontact";


export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
              path:"",
              element:<Home/>
            },
            {
              path:"garant",
              element:<Garant/>
            },
            {
              path:"dostavka",
              element:<Dostavka/>
            },
            {
              path:"komponi",
              element:<Komponi/>
            },
            {
              path:"kontact",
              element:<Kontact/>
            },

           ]
          }
])