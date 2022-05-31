import React from "react";

export default function ListadoMostrar({ alumnos }) {
  return (
    <>
      {alumnos.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}
