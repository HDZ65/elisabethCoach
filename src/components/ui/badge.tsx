import React from "react";

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="inline-block bg-[#A8BBA8] text-white text-sm px-3 py-1 rounded-full">
      {text}
    </span>
  );
};
