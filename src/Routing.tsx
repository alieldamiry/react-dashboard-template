import { Navigate, useRoutes } from "react-router";
import Layout from "./components/Layouts/DashboardLayout";
import SignIn from "./pages/SignIn";
import { useAppSelector } from "./redux/store";

const Routing = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: isAuth ? <div>Home</div> : <Navigate to="/login" />,
        },
        {
          path: "/Dashboard",
          element: isAuth ? <div>Dashboard</div> : <Navigate to="/dashboard" />,
        },
        {
          path: "/customers",
          element: isAuth ? <div>customers</div> : <Navigate to="/customers" />,
        },
      ],
    },
    {
      path: "/login",
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
