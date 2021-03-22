import React from "react";

interface IProps {
  label: string;
  onClick: any;
}
const Item: React.FC<IProps> = ({ label, onClick }) => {
  return (
    <div
      className="px-3 py-2 cursor-pointer bg-white bg-opacity-0 rounded-md hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <p className=" font-bold text-white">{label}</p>
      <div className=" border-t border-solid border-white"></div>
    </div>
  );
};

export default Item;
