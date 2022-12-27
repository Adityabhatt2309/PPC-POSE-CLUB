import React,{useState,useEffect,} from 'react';
import "./App.css";
import { useWeb3React } from '@web3-react/core'
import Home from "./Home/Home";

import Web3 from 'web3';
import getWeb3 from "./getWeb3";
import { useEagerConnect, useInactiveListener } from "./hooks";

function App() {
  //eslint-disable-next-line
  const [activatingConnector, setActivatingConnector] = useState();
  const { connector, active, chainId, account } = useWeb3React();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (active) localStorage.setItem("shouldEggerConnect", "true");
  }, [active]);

  useEffect(() => {
    const assignWeb3 = async () => {
      window.web3 = await getWeb3();
    }; 
    if (account) {
      assignWeb3();
    }
  }, [account]);

  const onChangeNetworkClick = async () => {
    // Metamask adds Ropsten chain by default, so no need to check wether chain is added or not
    const connectedWallet = localStorage.getItem("connectedWallet");
    if (connectedWallet === "metamask" || connectedWallet === "walletConnect") {
      try {
        console.log("calll");
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
        window.location.reload();
      } catch (error) {
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  rpcUrls: [process.env.REACT_APP_CURRENT_WALLETCONNECT_RPC],
                  chainId: "0x1", 
                  nativeCurrency: {
                    name: "Ethereum",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://etherscan.com"],
                  chainName: "Ethereum Mainnet",
                },
              ],
            });
            window.location.reload();
          } catch (addError) {
            console.error(addError);
          }
          console.error(error);
        } else {
          // if no window.ethereum then MetaMask is not installed
          //   alert(
          // 	"MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
          //   );
        }
      }
    }
  };

  // useEffect(() => {
  //   console.log("chainid changed", chainId);
  //   if (chainId !== 1 && account) {
  //     alert("Recovery Punks only support ethereum mainet");
  //     onChangeNetworkClick();
  //   }
  // }, [chainId]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
