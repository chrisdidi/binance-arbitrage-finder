import { ImSpinner8 } from "react-icons/im";

interface IProps {
  size?: number;
}
const Spinner: React.FC<IProps> = ({ size = 16 }) => {
  return (
    <div className=" animate-spin text-blue-400">
      <ImSpinner8 size={size} />
    </div>
  );
};

export default Spinner;
