const axios = require("axios").default;
require("dotenv").config();
const https = require('https')



const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

async function axiosResponse(response) {
  if (response.status == 200) {
    return { status: response.data.status, message: response.data.message, data: response.data.items };
  } else {
    return { status: false, message: response.message, data: {} };
  }
}
module.exports = {
  post: async (endpoint, bodyData, headers) => {
    try {
      let config = {
        method: "post",
        url: endpoint,
        httpsAgent,
        headers: {
          "Content-Type": "application/json",
        },
        data: bodyData,
      };
      if (headers) {
        Object.assign(config.headers, headers)
      }
      let response = await axios(config)
      return axiosResponse(response);
    } catch (error) {
      return axiosResponse(error);
    }
  },
  get: async (endpoint, token) => {
    try {
      let config = {
        method: "get",
        url: endpoint,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (token) {
        config.headers.Authorization = token.Authorization
      }
      console.time("start")
      let response = await axios(config)
      console.timeEnd("start")
      return axiosResponse(response);
    } catch (error) {
      return axiosResponse(error);
    }
  },
};

