import RandomBtn from "../button/RandomBtn";
import SearchBtn from "../button/SearchBtn";

const Header = () => {
  return (
    <section className="content-header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon logo"
          loading="lazy"
        />
      </div>
      <div className="searchPokemon">
        <input type="text" placeholder="Search Pokemon" />
        <div className="btn-wrapper">
          <SearchBtn />
          <RandomBtn />
        </div>
      </div>
    </section>
  );
};

export default Header;
