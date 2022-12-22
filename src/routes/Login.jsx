import React, { useState } from "react";

export const Login = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    password: "",
    remember: true,
  });

  function handleChange(e) {
    const aux = { ...usuario };
    aux[e.target.name] = e.target.value;
    setUsuario(aux);
    //console.log(e.target.checked);
  }

  function handleChange1(e) {
    const aux = { ...usuario };
    aux[e.target.name] = e.target.checked;
    setUsuario(aux);
    //console.log(e.target.checked);
  }

  return (
    <div
      className="container"
      style={{ background: "lightgray", marginTop: 50, padding: 15 }}
    >
      <form>
        <div>
          <h1 style={{ color: "blue", textalign: "center" }}>
            <strong>PRÁCTICA</strong>
          </h1>
          <h2 style={{ color: "aquamarine", textalign: "center" }}>
            <strong>Iniciar Sesion</strong>
          </h2>
          <label htmlFor="txtusu">
            <strong>Usuario</strong>
          </label>
          <input
            type="text"
            id="txtusu"
            name="nombre"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="txtpas">
            <strong>Contraseña</strong>
          </label>
          <input
            type="password"
            id="txtpas"
            name="password"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="remember"
            onChange={handleChange1}
          />
          Remember
        </div>

        <input
          type="button"
          className="btn btn-danger"
          value="Login"
          onClick={(e) => console.log(usuario)}
        />
      </form>
    </div>
  );
};
