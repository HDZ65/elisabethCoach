import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-[#F5F1EA]">
      <h3 className="text-xl font-semibold text-[#A8BBA8]">{title}</h3>
      <p className="mt-2 text-[#7D7D7D]">{description}</p>
    </div>
  );
};
