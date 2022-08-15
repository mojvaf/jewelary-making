import React from "react";
import { IAlert } from "../../hook/useAlert";

interface AlertProps {
  alert: IAlert;
}

const Alert: React.FC<AlertProps> = ({ alert }) => {
  return (
    alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>
  );
};

export default Alert;
