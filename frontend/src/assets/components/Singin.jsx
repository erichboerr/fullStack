import React from "react";
import "../css/Singin.css";
import { Link } from "react-router-dom";

const Singin = () => {
  return (
    <div className="singin-container">
      <h1>Crear Cuenta</h1>
      <label className="label">Nombre</label>
      <input className="input" type="text" required></input>
      <label className="label">Email</label>
      <input className="input" type="email" required></input>
      <label className="label">Telefono (Opcional)</label>
      <input className="input" type="number"></input>
      <label className="label">Contraseña</label>
      <input className="input" type="password" required></input>
      <label className="label">Confirmar Contraseña</label>
      <input className="input" type="password" required></input>
      <button className="button">Crear Cuenta</button>
      <p>¿Ya tenés una cuenta?</p>
      <div>
        <Link to="/Login">Iniciar Sesion</Link>
      </div>
    </div>
  );
};

export default Singin;
