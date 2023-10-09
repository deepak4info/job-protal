import { commonrequest } from "./ApiCall.js";
import { BACKEND_URL } from "./helper.js";

export const registerfunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/signup`, data);
};

export const sentOtpFunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/otp/`, data);
};

export const userVerify = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/auth/otpverify`, data);
};
export const LoginFunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/auth/otpgenerate`, data);
};
