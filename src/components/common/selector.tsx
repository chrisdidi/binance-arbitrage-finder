import React, { useState } from "react";

interface IProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
}
const Selector: React.FC<IProps> = ({ label, hint, disabled = false }) => {
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
      <div className=" w-full bg-gray-100 flex justify-between px-3 py-2 rounded-lg">
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className=" w-full focus:outline-none bg-transparent z-0"
          onFocus={setShowList.bind(this, true)}
          onBlur={setShowList.bind(this, false)}
        />
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
