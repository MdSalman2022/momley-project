import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../config/firebase-config";
import { sendToServer } from "./LoginPostDB";

// Function to confirm OTP entered by the user
async function confirmOTP(otp, phoneNumber, displayName) {
  try {
    const confirmationResult = window.confirmationResult;
    const result = await confirmationResult.confirm(otp);
    console.log("Success");

    const user = result.user;
    console.log(user);
    console.log(displayName);
    const postData = {
      userId: user.uid,
      fname: displayName?.split(" ")[0],
      lname: displayName?.split(" ")[1],
      phone: phoneNumber,
    };

    console.log(postData);

    sendToServer(postData, postData);

    return { message: true, UID: user.uid };
  } catch (error) {
    console.log(error);
    return { message: false };
  }
}

// Function to verify reCAPTCHA. It's necessary for Google phone auth
function reVerify() {
  if (!window.recaptchaVerifier) {
    console.log("reverify");
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: response => {
          console.log(response);
        },
      },
      auth
    );
  }
}

export { reVerify, confirmOTP };
