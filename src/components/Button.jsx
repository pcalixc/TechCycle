import React from "react";

const Button = ({ styles }) => (
  <button href="#cta" type="button" className={`py-4 px-6 mt-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Consulta la informacion actual
  </button>
);

export default Button;
