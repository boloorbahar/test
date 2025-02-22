import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
import routes from "./utils/routes";
import { useDispatch } from "react-redux";
import { setRouterPath } from "store/router/action";
import DefaultLayout from "layouts";
import FundDetail from "container/fundDetail/fundDetail";

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
          <Route path="/fund/*" element={<FundDetail />} />
          <Route path="/" element={<DefaultLayout />}>
            {routes.map((route) => {
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
