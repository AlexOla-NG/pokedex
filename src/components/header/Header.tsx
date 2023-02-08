import { FormEvent, useState } from "react";
import RandomBtn from "../button/RandomBtn";
import SearchBtn from "../button/SearchBtn";
import HeaderLogo from "./HeaderLogo";
import { IHeader } from "./IHeader";

const Header = ({ getRandomPokemon, getSearchTerm }: IHeader) => {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSearchTerm(input);
    setInput("");
  };
  return (
    <section className="content-header">
      <HeaderLogo />
      <div className="searchPokemon">
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Pokemon"
            onChange={handleChange}
            value={input}
          />
        </form>
        <div className="btn-wrapper">
          <SearchBtn />
          <RandomBtn getRandomPokemon={getRandomPokemon} />
        </div>
      </div>
    </section>
  );
};

export default Header;
