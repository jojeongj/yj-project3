import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Notfound from "./routes/Notfound";
import Comics from "./routes/Comics";
import Home from "./routes/home";
import Events from "./routes/Events";
import Characters from "./routes/Characters";
import Detail from "./routes/Detail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Notfound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "comics",
                element: <Comics />
            },
            {
                path: "comics/:id",
                element: <Detail />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "events/:id",
                element: <Detail />
            },
            {
                path: "characters",
                element: <Characters />
            },
            {
                path: "characters/:id",
                element: <Detail />
            }
        ]
    }
])
export default router