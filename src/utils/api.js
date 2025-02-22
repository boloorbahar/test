import { Modal } from "antd";
import axios from "axios";
import storage from "redux-persist/lib/storage";

const handleToken = async (config) => {
  const user = localStorage.getItem("access-token");
  if (user) {
    config.headers["Authorization"] = `Bearer ${user}`;
  }
};

const handleValidateError = (error) => {
  const err = Object.keys(error?.response?.data?.body?.validation_errors);
  const content = [];
  err?.map((i) =>
    content.push(
      <p>{`${i} : ${error?.response?.data?.body?.validation_errors[i][0]}`}</p>
    )
  );
  return Modal.error({
    title: "خطا",
    content: content,
    okText: "تایید",
    centered: true,
  });
};
const handleError = (error) => {
  const errorMessage =
    error?.response?.data?.status?.message ||
    "خطایی رخ داده است. دوباره تلاش کنید";

  return Modal.error({
    title: "خطا",
    content: errorMessage,
    okText: "تایید",
    centered: true,
  });
};

const handle401Error = (instance, originalRequest) => {
  const user = localStorage.getItem("refresh-token");
  // const headers = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  // };

  if (user) {
    return axios
      .post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/general/auth/refresh-token/`,
        {
          token: user,
        }
      )
      .then((response) => {
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response?.data?.body?.token?.access_token}`;
        localStorage.setItem(
          "access-token",
          response?.data?.body?.token?.access_token
        );
        localStorage.setItem(
          "refresh-token",
          response?.data?.body?.token?.refresh_token
        );
        return instance(originalRequest);
      })
      .catch(() => {
        window.location.href = "/";
        localStorage.clear();
        storage.removeItem("persist:root");
      });
  } else {
    window.location.href = "/";
    localStorage.clear();
    storage.removeItem("persist:root");
  }
};

const apiCall = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_SERVER,
    headers: {},
    contentType: "application/json-patch+json",
    responseType: "json",
  });

  instance.interceptors.request.use(
    async (config) => {
      await handleToken(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return handle401Error(instance, originalRequest);
      } else if (error.response?.status === 403) {
        window.location.href = "/";
        localStorage.clear();
        storage.removeItem("persist:root");
      } else if (error.response?.status === 406) {
        return handleValidateError(error);
      } else {
        return handleError(error);
      }
      // return Promise.reject(error);
    }
  );

  return instance;
};

export default apiCall;
