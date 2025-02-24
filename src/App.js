import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { setRouterPath } from "store/router/action";
import DefaultLayout from "layouts/defaultLayout";
import defaultRoutes from "./utils/defaultRoutes";
import pageRoutes from "./utils/pageRoutes";
import PageLayout from "layouts/pageLayout";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    dispatch(setRouterPath(location.pathname));
    // dispatch(setDataById(null));
  }, [location.pathname]);

  return (
    <ConfigProvider direction="ltr">
      <Suspense>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {defaultRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
          <Route path="/" element={<PageLayout />}>
            {pageRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
