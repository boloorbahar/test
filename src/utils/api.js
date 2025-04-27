import { Modal } from "antd";
import axios from "axios";

const handleToken = async (config) => {
  const user = localStorage.getItem("access-token");
  if (user) {
    config.headers["Authorization"] = `Bearer ${user}`;
  }
};

const handleError = (error) => {
  const errorMessage = error?.response?.data?.error;
  errorMessage !== "user not found" && window.alert(errorMessage);
};

const apiCall = () => {
  const instance = axios.create({
    baseURL: "https://107.189.15.115:80",
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
      handleError(error);
      return error;
    }
  );

  return instance;
};

export default apiCall;
