import useContract from "./useContract";

import MINTERabi from "../contracts/Minter.json"

const useMinterContract = () =>
  {
   //console.log("process.env.REACT_APP_MINTER_ADDRESS",process.env.REACT_APP_MINTER_ADDRESS);
   return useContract(process.env.REACT_APP_MINTER_ADDRESS, MINTERabi, true); 
  }

export default useMinterContract;
   