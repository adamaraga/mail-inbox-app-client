import { Link } from "react-router-dom";
import backArrowIcon from "../assets/images/backArrow.svg";

const BackButton = ({ to }) => {
  return (
    <Link to={to}>
      <div className="backButton">
        <img src={backArrowIcon} alt="back arrow" />
      </div>
    </Link>
  );
};

export default BackButton;
