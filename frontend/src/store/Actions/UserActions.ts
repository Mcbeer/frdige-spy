import { Dispatch } from "redux";
import { perhaps } from "../../utils/perhaps";

export const AUTHENTICATE_BEGIN = "AUTHENTICATE_BEGIN";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE";

const authenticateBegin = () => {
  return {
    type: AUTHENTICATE_BEGIN,
  };
};
const authenticateSuccess = (data: any) => {
  return {
    type: AUTHENTICATE_SUCCESS,
    payload: data,
  };
};
const authenticateFailure = (error: Error) => {
  return {
    type: AUTHENTICATE_FAILURE,
    payload: error,
  };
};

export const authenticate = ({ profileObj, tokenObj }: any) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(authenticateBegin());
    console.log("Authenticating user");
    const [authenticateError, authenticated] = await perhaps(
      authenticateUser({ profileObj, tokenObj })
    );
    console.log(authenticated);

    if (authenticateError) {
      dispatch(authenticateFailure(authenticateError));
    } else {
      dispatch(authenticateSuccess(authenticated));
    }
  };
};

const authenticateUser = async ({ profileObj, tokenObj }: any) => {
  return fetch(`http://localhost:8000/auth`, {
    method: "POST",
    body: JSON.stringify({ profileObj, tokenObj }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const CHECK_AUTH_STATUS_BEGIN = "CHECK_AUTH_STATUS_BEGIN";
export const CHECK_AUTH_STATUS_SUCCESS = "CHECK_AUTH_STATUS_SUCCESS";
export const CHECK_AUTH_STATUS_FAILURE = "CHECK_AUTH_STATUS_FAILURE";

const checkAuthStatusBegin = () => {
  return {
    type: CHECK_AUTH_STATUS_BEGIN,
  };
};
const checkAuthStatusSuccess = (data: any) => {
  return {
    type: CHECK_AUTH_STATUS_SUCCESS,
    payload: data,
  };
};
const checkAuthStatusFailure = (err: any) => {
  return {
    type: CHECK_AUTH_STATUS_FAILURE,
    payload: err,
  };
};

export const checkAuthStatus = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(checkAuthStatusBegin());
    try {
      const user = await fetch("http://localhost:8000/auth/authstatus", {
        credentials: "include",
      }).then((data) => data.json());
      if (user.id) {
        dispatch(checkAuthStatusSuccess(user));
      } else {
        dispatch(checkAuthStatusFailure(user));
      }
    } catch (err) {
      dispatch(checkAuthStatusFailure(err));
    }
  };
};
