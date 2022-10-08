import Link from "next/link";
import { HomeHeader, Menu } from "../../components/Header/styles";
import { Button } from "../Button/styles";

const Header: React.FC = () => {
  return (
    <>
      <title>Programa da Aletur</title>
      <HomeHeader>
        <h1>Aletur</h1>
      </HomeHeader>
      <Menu>
        <Link href={"/home"}>
          <Button>Home</Button>
        </Link>
        <Link href={"/frota"}>
          <Button>Frota</Button>
        </Link>
        <Link href={"/manutencao"}>
          <Button>Manutenção</Button>
        </Link>
        <Link href={"/alertas"}>
          <Button>Alertas</Button>
        </Link>
      </Menu>
    </>
  );
};
export default Header;
