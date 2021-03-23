import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";

interface IProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
  loading?: boolean;
}
const Selector: React.FC<IProps> = ({
  label,
  hint,
  disabled = false,
  loading = false,
}) => {
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };
  return (
    <div className=" w-full relative py-2">
      <div className=" w-full px-2">
        <p className="input-label">{label}</p>
        <p className="input-hint">{hint}</p>
      </div>
      <div className=" w-full bg-gray-100 flex justify-between items-center px-3 py-2 rounded-lg">
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className=" w-full focus:outline-none bg-transparent z-0"
          onFocus={setShowList.bind(this, true)}
          onBlur={setShowList.bind(this, false)}
        />
        <div
          className=" text-gray-500 cursor-pointer hover:bg-opacity-100 bg-opacity-0 transition-all duration-300 bg-gray-200 p-1 rounded-full"
          onClick={setShowList.bind(this, !showList)}
        >
          {loading ? (
            <div className=" animate-spin">
              <ImSpinner8 size={16} />
            </div>
          ) : showList ? (
            <BsFillCaretUpFill size={16} />
          ) : (
            <BsFillCaretDownFill size={16} />
          )}
        </div>
        {showList && (
          <div className=" absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 z-10">
            {disabled && <p className="p-3">{hint}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
