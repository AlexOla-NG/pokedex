import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTint,
  faLeaf,
  faUserMinus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

// TODO: stopped here
// finish styling Card component

// TODO: toggle faUserPlus, faUserMinus when pokemon is added/removed from team

const Card = () => {
  return (
    <div className="pokemon">
      <img
        src="https://i.pinimg.com/originals/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff.jpg"
        alt=""
      />
      <div className="pokemon-details">
        <h2>Charmander</h2>
        <h3 className="species-title">Species</h3>
        <div className="species">
          <FontAwesomeIcon icon={faBolt} className="active"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTint}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
      </div>
    </div>
  );
};

export default Card;
