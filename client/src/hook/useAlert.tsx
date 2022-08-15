import { useState } from "react";
import Alert from "../components/alert/Alert";

export enum alertType {
  ERROR = "danger",
  WARNING = "light",
  SUCCESS = "success",
}
export interface IAlert {
  message: string;
  type: alertType;
}

export const useAlert = () => {
  const [alert, setAlert] = useState<IAlert>();

  function showAlert(message: string, type: alertType) {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(undefined);
    }, 3000);
  }

  function renderAlert() {
    return alert && <Alert alert={alert} />;
  }

  return { showAlert, renderAlert };
};
