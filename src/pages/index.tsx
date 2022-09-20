import { Body, HomeHeader, Title } from "../../components/styles";

const Home: React.FC = () => {
  return (
    <body>
      <title>Programa da Aletur</title>
      <HomeHeader>
        <h1>Aletur</h1>
        <div>
          <button>home</button>
          <button>Frota</button>
          <button>manutenção</button>
          <button>Alertas</button>
        </div>
      </HomeHeader>
    </body>
  );
};

export default Home;
