import HeaderLogo from "../components/header/HeaderLogo";
import { IMyTeam } from "../interface";

const MyTeam = ({ handleAddPokemon }: IMyTeam) => {
  return (
    <main className="my-team">
      <div className="logo">
        <HeaderLogo />
      </div>
      MyTeam
    </main>
  );
};

export default MyTeam;
