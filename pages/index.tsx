import axios from "axios";
import { useEffect, useState } from "react";
import { HomeHeader } from "../components/styles";
import veiculo from "../pages/_app";

const url = "http://localhost:8080/api/";

function getVeiculos() {
  const [veiculo, setVeiculo] = useState([]);

  useEffect(() => {
    axios.get(url + "veiculo")
      .then(({ data }) => {
        setVeiculo(data);
        console.log(data);
      })
      .catch((error) => {});
  }, []);
  return (
      <div>
        {veiculo?.map((veiculo,keys) => {
          return <div key={veiculo.placa} className={veiculo.descrveiculo}>{veiculo.placa}</div>;
        })}
      </div>
  );
}
export default getVeiculos;
