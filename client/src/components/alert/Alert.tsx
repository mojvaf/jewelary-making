import React from 'react'
import { useAppSelector } from "../../redux/store";

const Alert = () => {

  const { alert } = useAppSelector((state) => state.alert);

  return (
    alert !== null && alert.length > 0 && alert.map(ale=>{
      <div /* key={ale} className={`alert alert-${ale.alertType}`*/></div>
    })
  )
}

export default Alert