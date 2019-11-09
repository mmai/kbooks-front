export interface User {
  username: string;
  password: string;
}

export interface RootState {
  status: string;
  user?: User;
  connected: boolean;
}
