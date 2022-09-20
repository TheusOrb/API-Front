import { Html } from "next/document";
import { Button, HomeHeader, Menu } from "../components/styles";

function Home() {
  return (
    <div>
      <title>Programa da Aletur</title>
      <HomeHeader>
        <h1>Aletur</h1>
      </HomeHeader>
        <Menu>
          <Button>Home</Button>
          <Button>Frota</Button>
          <Button>Manutenção</Button>
          <Button>Alertas</Button>
        </Menu>
    </div>
  );
}

export default Home;
