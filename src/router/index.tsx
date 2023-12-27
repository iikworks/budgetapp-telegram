import { createBrowserRouter } from "react-router-dom";
import RootPage from "../routes/root";
import DashboardPage from "../routes/dashboard";
import AccountPage from "../routes/accounts/account";

const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      }, {
        path: "/accounts/:id",
        element: <AccountPage />,
      },
    ],
  },
]);

export { router };
