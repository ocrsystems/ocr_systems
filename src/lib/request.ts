import * as request from "request";

export const options = ({ url, method, body, headers = {} }) => {
  const res: any = {
    url,
    headers: { "Content-Type": "application/json", ...headers },
    method,
  };
  if (method !== "GET" && body) { res.body = JSON.stringify(body); }
  return res;
};

export const requestPromise = (option) => {
  return new Promise((resolve, reject) => {
    try {
      request(option, (error, response, body) => {
        error ? reject(error) : resolve({
          "body": body,
          "response": response,
          "header": response.headers
        });
      });
    } catch (error) {
      console.log("error in requestJSONPromise", error);
      reject(error);
    }
  });
};
