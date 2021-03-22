import React, { useCallback } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Item from "./Item";

type ItemType = "local" | "url" | "toast";

const items: {
  label: string;
  path: string;
  type: ItemType;
}[] = [
  {
    label: "Home",
    path: "/",
    type: "local",
  },
  {
    label: "Author",
    path: "https://chrisling.dev",
    type: "url",
  },
];

interface IProps extends RouteComponentProps<any> {}
const Menu: React.FC<IProps> = ({ history }) => {
  const onClick = useCallback(
    (path: string, type: ItemType) => {
      if (type === "local") {
        return history.push(path);
      }
      if (type === "url") {
        return window.open(path);
      }
    },
    [history]
  );

  return (
    <div className=" w-full flex justify-between items-center p-3 md:px-14 fixed">
      <h1 className=" font-bold text-white text-lg">
        ARBITRAGE FINDER
        <br />
        <p className=" text-base font-normal">
          By <span className=" underline cursor-pointer">ChrisLing.Dev</span> 💻
        </p>
      </h1>
      <div className=" flex">
        {items.map((item) => (
          <Item
            label={item.label}
            onClick={onClick.bind(this, item.path, item.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Menu);
