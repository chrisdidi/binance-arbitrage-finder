import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";
import { SymbolProps } from "../../types/general";

interface IProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
  list?: {
    value: any;
    label: string;
  }[];
  onSelect?: any;
}
const Selector: React.FC<IProps> = ({
  label,
  hint,
  disabled = false,
  loading = false,
  placeholder,
  list,
  onSelect,
}) => {
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const onSelectItem = (pair: SymbolProps) => {
    onSelect(pair);
    setQuery(pair.symbol);
    setShowList(false);
  };

  return (
    <div className=" w-full relative py-2">
      <div className=" w-full px-2">
        <p className="input-label">{label}</p>
        <p className="input-hint">{hint}</p>
      </div>
      <div className=" w-full bg-gray-100 flex justify-between items-center px-3 py-2 rounded-lg">
        <input
          placeholder={placeholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className=" w-full focus:outline-none bg-transparent z-0"
          onFocus={setShowList.bind(this, true)}
        />
        {loading ? (
          <div className=" animate-spin text-blue-400">
            <ImSpinner8 size={16} />
          </div>
        ) : (
          <div
            className=" text-gray-500 cursor-pointer hover:bg-opacity-100 bg-opacity-0 transition-all duration-300 bg-gray-200 p-1 rounded-full"
            onClick={setShowList.bind(this, !showList)}
          >
            {showList ? (
              <BsFillCaretUpFill size={16} />
            ) : (
              <BsFillCaretDownFill size={16} />
            )}
          </div>
        )}
        {showList && (
          <div className=" absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-10 max-h-36 overflow-y-auto">
            {disabled && <p className="p-3">{hint}</p>}
            {!disabled &&
              list?.map((data) =>
                query === "" ||
                data.label.substr(0, query.length).toLowerCase() ===
                  query.toLowerCase() ? (
                  <div
                    key={data.label}
                    className=" p-2 hover:bg-gray-100 text-gray-400 font-semibold cursor-pointer"
                    onClick={onSelectItem.bind(this, data.value)}
                  >
                    {data.label}
                  </div>
                ) : (
                  <></>
                )
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
