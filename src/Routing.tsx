import { Navigate, useRoutes } from "react-router";
import Layout from "./components/Layouts/DashboardLayout";
import SignIn from "./pages/SignIn";
// import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "./redux/store";
import Customers from './modules/finance/customers'

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
          element: <div>Dashboard</div>,
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
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route
    //       path="/customers"
    //       element={isAuth ? <div>customers</div> : <Navigate to="/" />}
    //     />
    //   </Route>
    //   <Route path="/auth" element={<AuthLayout />}>
    //     <Route
    //       path="/auth/login"
    //       element={isAuth ? <div>login page</div> : <Navigate to="/" />}
    //     />
    //   </Route>
    //   <Route path="*" element={<div>Not found</div>} />
    // </Routes>
    <>{routes}</>
  );
};

export default Routing;
