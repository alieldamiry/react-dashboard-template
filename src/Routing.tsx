import { Navigate, useRoutes } from "react-router";
import Layout from "./components/Layouts/DashboardLayout";
import SignIn from "./pages/SignIn";
import { useAppSelector } from "./redux/store";
import Customers from "./modules/finance/customers";
import Dashboard from "src/pages/Dashboard";

const Routing = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const routes = useRoutes([
    {
      path: "/",
      element: isAuth ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <Navigate to="dashboard" />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "finance",
          children: [
            {
              path: "customers",
              element: <Customers />,
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: isAuth ? <Navigate to="/dashboard" /> : <SignIn />,
    },
    {
      path: "*",
      element: <div>Not found</div>,
    },
  ]);
  return (
    <>{routes}</>
  );
};

export default Routing;
