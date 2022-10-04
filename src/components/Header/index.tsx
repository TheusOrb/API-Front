import { HomeHeader, Menu } from '../../components/Header/styles';
import { Button } from '../Button/styles';



const Header: React.FC = () => {
  return (
    <>
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
    </>
  );
};
export default Header;
