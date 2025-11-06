import { useState } from "react";
import openInTelegramPlane from "../../../assets/openInTelegramPlane.svg";

export function GradientButton({
  gradient = true,
  hover = true,
  isIcon = true,
  text = "",
  className = "",
  myIcon,
  myPadding = false,
  onClick,
}) {
  const [hoverPic, setHoverPic] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <button
        className={`${className} shadow-lg rounded-lg flex justify-center items-center text-white gap-2 w-fit transition-all
      ${
        gradient
          ? "bg-[#4da2ff] hover:bg-[#3d8fef] shadow-[#4da2ff]/30 hover:shadow-[#4da2ff]/50"
          : "border"
      }
      ${!hover && "hover:shadow-2xl"}
      ${!myPadding && "py-4 px-6"}
      `}
        onMouseOver={() => {
          setHoverPic(true);
        }}
        onMouseOut={() => {
          setHoverPic(false);
        }}
        onClick={onClick}
      >
        {myIcon && <img src={myIcon} alt="button icon" className="w-[25px]" />}
        {isIcon && <img src={openInTelegramPlane} alt="icon" />} {text}
      </button>
      {hover && (
        <div
          className={`w-[10rem] absolute scale-150 top-0 opacity-0 transition-all duration-1000 ease-in-out h-[3rem] translate-y-8 bg-[#4da2ff] blur-2xl rounded-lg -z-10 ${
            hoverPic && "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
