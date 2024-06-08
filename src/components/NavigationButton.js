import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationButton({ to, label }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className="navigation-button">
      {label}
    </button>
  );
}

export default NavigationButton;
