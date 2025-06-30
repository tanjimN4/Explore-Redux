import App from "@/App";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Task />,
            },
            {
                path: "users",
                element: <Users />,
            },
            
        ],
    },
]);

export default router;