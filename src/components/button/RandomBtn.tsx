import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const RandomBtn = () => {
  return (
    <button className="button-search" type="button">
      <div className="button-content">
        Random
        <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
      </div>
    </button>
  );
};

export default RandomBtn;
