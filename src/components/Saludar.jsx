import React from "react";

export default function Saludar({ msg, quien, children }) {
  return (
    <>
      <div>Este es el msg:{msg + " " + quien}</div>
      <div>Estos son mis hijos:{children}</div>
    </>
  );
}
