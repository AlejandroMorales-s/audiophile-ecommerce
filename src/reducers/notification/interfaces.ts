export interface NotificationData {
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export interface InitialState {
  isActive: boolean;
  closingNotification: boolean;
  data: NotificationData;
}
