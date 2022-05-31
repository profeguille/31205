import React from "react";
import ListadoMostrar from "./ListadoMostrar";

export default function ListadoContainer() {
  let alumnos = ["Juan Maria", "Fran", "Guille"];
  alumnos.push("Mailen");
  return <ListadoMostrar alumnos={alumnos} />;
}
