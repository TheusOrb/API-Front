 import axios from "axios";
 import { useEffect, useState } from "react";


 const url = "http://localhost:8080/api/";

 function getVeiculos() {
   const [veiculo, setVeiculo] = useState([]);

   useEffect(() => {
     axios.get(url + "veiculo")
       .then(({ data }) => {
         setVeiculo(data);
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