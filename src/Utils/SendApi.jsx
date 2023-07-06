import axios from "axios";
import { root } from "./Endpoint";

const sendApiReq = async ({ headers = {}, ...others }) => {
  const instance = axios.create({
    baseURL: root.baseUrl,
  });

  // Response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      const err = new Error(error?.message);
      err.status = error?.response?.status;
      err.message = error?.response?.data?.message;
      throw err;
    }
  );

  try {
    const response = await instance({ ...others, headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export default sendApiReq;
