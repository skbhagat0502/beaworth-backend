// Create Token and saving in cookie
import { COOKIE_EXPIRE, ORIGIN } from "../constants.js";
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    SameSite: "None",
    secure: true,
    path: "/",
    domain: ORIGIN,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
export default sendToken;
