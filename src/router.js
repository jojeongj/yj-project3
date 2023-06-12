import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Notfound from "./routes/Notfound";
import Comics from "./routes/Comics";
import Home from "./routes/home";
import Events from "./routes/Events";
import Characters from "./routes/Characters";


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
                path: "events",
                element: <Events />
            },
            {
                path: "characters",
                element: <Characters />
            }
        ]
    }
])
export default router