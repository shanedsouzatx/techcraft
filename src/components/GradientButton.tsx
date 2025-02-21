import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  paddingY?: string;
}

const GradientButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="text-sm font-medium cursor-pointer py-3 w-full md:w-44 md:py-4 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-md relative overflow-visible"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;
