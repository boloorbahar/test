import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { setRouterPath } from "store/router/action";
import DefaultLayout from "layouts/defaultLayout";
import defaultRoutes from "./utils/defaultRoutes";
import pageRoutes from "./utils/pageRoutes";
import PageLayout from "layouts/pageLayout";
import  WebApp  from '@twa-dev/sdk';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setRouterPath(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    const tg = window.Telegram.WebApp; // استفاده از WebApp مستقیم از window

    if (location.pathname === "/") {
      tg?.BackButton?.hide(); // دکمه Back رو مخفی کن در صفحه اول
    } else {
      tg?.BackButton?.show(); // دکمه Back رو نمایش بده در صفحات دیگه
    }

    return () => {
      tg.BackButton.offClick(); // حذف لیسنر در هنگام تغییر مسیر
    };
  }, [location]);

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg?.BackButton?.onClick(() => navigate(-1)); // عملکرد دکمه Back
  }, [navigate]);


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
