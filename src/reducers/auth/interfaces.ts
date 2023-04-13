export interface InitialState {
  user: null | User;
  isLoading: boolean;
  isLogged: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserForm {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}
