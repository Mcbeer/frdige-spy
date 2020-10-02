import { ActionModel, StoreModel } from "../StoreModel";
import {
  AUTHENTICATE_BEGIN,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  CHECK_AUTH_STATUS_BEGIN,
  CHECK_AUTH_STATUS_SUCCESS,
  CHECK_AUTH_STATUS_FAILURE,
} from "../Actions/UserActions";

const initialState: StoreModel["user"] = {
  profile: {
    id: 0,
    google_id: "",
    name: "",
    avatar_url: "",
    created_at: "",
    updated_at: "",
  },
  loading: false,
  error: null,
  authenticated: false,
};

export const user = (state = initialState, { type, payload }: ActionModel) => {
  switch (type) {
    case AUTHENTICATE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        profile: {
          ...payload,
        },
        loading: false,
        authenticated: true,
      };
    case AUTHENTICATE_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
        authenticated: false,
      };

    case CHECK_AUTH_STATUS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CHECK_AUTH_STATUS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        profile: {
          ...payload,
        },
        loading: false,
        authenticated: true,
      };
    case CHECK_AUTH_STATUS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
