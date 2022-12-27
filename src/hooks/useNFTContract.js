import useContract from "./useContract";

import NFTabi from "../contracts/NFT.json"

const useNftContract = () =>
  {return  useContract(process.env.REACT_APP_NFT_ADDRESS, NFTabi, true); }

export default useNftContract; 