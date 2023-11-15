import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "../../components/SharedLayout/SharedLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SharedLayout />,
        children: [
            {
                index: true,
                element: <div>Все вийшло</div>
            },
        ],
    },
]);
export default router;