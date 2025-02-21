import React, { useEffect } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  paddingY?: string;
}

const OutlineButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  width = "w-44",
  paddingY = "py-4",
}) => {
  const handleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <button
      className={`text-[#5114AE] text-sm font-semibold rounded-md cursor-pointer py-3 w-full md:w-44 md:py-4 border-2 border-[#5114AE] bg-transparent hover:bg-[#5114AE] hover:text-white transition-colors duration-300`}
      onClick={handleChat}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
