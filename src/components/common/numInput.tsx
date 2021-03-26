import React from "react";

interface IProps {
  value?: any;
  onChange?: any;
  threshold?: number;
  label?: string;
  changeValue?: number;
}

const NumInput: React.FC<IProps> = ({
  value,
  onChange,
  label,
  changeValue = 0.0001,
}) => {
  const symbolStyle =
    " flex-center h-8 w-8 bg-indigo-400 text-white rounded-full cursor-pointer shadow-md hover:shadow-lg hover:bg-blue-400 transition-all duration-150";
  return (
    <div className="flex justify-between items-center w-full py-1">
      <p className="input-label">{label}</p>
      <div className="flex-center ">
        <div
          className={symbolStyle}
          onClick={onChange.bind(this, value - changeValue)}
        >
          -
        </div>
        <input
          onChange={(e) => {
            if (typeof parseFloat(e.target.value) !== "number") {
              return;
            }
            onChange(parseFloat(e.target.value));
          }}
          className=" rounded-full w-16 mx-2 p-2 text-center focus:outline-none"
          value={value}
        />
        <div
          className={symbolStyle}
          onClick={onChange.bind(this, value + changeValue)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default NumInput;
