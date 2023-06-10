import { Route, Routes } from "react-router";
import MasterLayout from "../layouts/MasterLayout";
import CheckoutPage from "../pages/CheckoutPage";
import ThaliPage from "../pages/ThaliPage";
import routes from "./routes.json";
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<MasterLayout />}>
          <Route index element={<ThaliPage />} />
          <Route path={routes.HOME} element={<ThaliPage />} />
          <Route path={routes.THALI} element={<ThaliPage />} />
          <Route path={routes.CHECKOUT} element={<CheckoutPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default PageRoutes;
