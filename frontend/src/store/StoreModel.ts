import { DefaultRootState } from "react-redux";

export interface StoreModel extends DefaultRootState {
  user: {
    profile: {
      id: number;
      google_id: string;
      name: string;
      avatar_url: string;
      created_at: string;
      updated_at: string;
    };
    loading: boolean;
    error: any;
    authenticated: boolean;
  };
  account: {
    name: string;
  };
}

export interface ActionModel {
  type: string;
  payload: any;
}
