export type AlertType = "delete" | "error";

export interface Alert {
  id: number;
  type: AlertType;
  message: string;
  duration: number;
  transition? : string;
}

export interface AlertApi {
  createAlert: (alert: Alert) => void;
  destroyAlert: (alert: Alert) => void;
  destroyAllAlerts: () => void;
}

export interface AlertMsg {
  message: string,
  name: string,
  type: AlertType,
  duration: number
}