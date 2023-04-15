export interface InitialState {
  user: null | User;
  isLoading: boolean;
  isLogged: boolean;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserForm {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface ErrorType {
  response: {
    data: {
      message: string;
    };
  };
}
