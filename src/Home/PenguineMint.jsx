import React, { useState,useRef,useEffect } from 'react';
import image1 from '../images/assets/image1.png'
import image2 from '../images/assets/image2.png'
// web3 related imports
import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../utils/connector";
import Web3 from "web3";
import useMinterContract from "../hooks/useMinterContract";
import useNftContract from "../hooks/useNFTContract";
import  './style.css'

const PenguineMint = ({openModal}) => {
    const { connector, account, activate, error, active, chainId, deactivate } = useWeb3React();

    const minterContract = useMinterContract();
  const nftContract = useNftContract();

  const [totalMinted, settotalMinted] = useState("0")
  const [round, setround] = useState("")
  const [price, setPrice] = useState(0);
  const [remainingNfts, setremainingNfts] = useState(0)
  const [isdisable, setisDisable] = useState(false)

  const [activatingConnector, setActivatingConnector] = useState();
  const onboarding = useRef();
    
//   const onConnectWithMetamaskClick = () => {
//     if (MetaMaskOnboarding.isMetaMaskInstalled()) {
//       setActivatingConnector(injected);
//       activate(injected, undefined, true)
//         .then(() => {
//           //console.log("Connected successfully");
//         })
//         .catch(() => {
//           // setTried(true);
//         });
//       localStorage.setItem("connectedWallet", "metamask");
//     } else {
//       onboarding.current.startOnboarding();
//     }
//   };

//   const onConnectWithWalletConnect = () => {
//     setActivatingConnector(walletconnect);
//     activate(walletconnect, undefined, true).catch((err) => {
//       setActivatingConnector();
//       walletconnect.walletConnect1Provider = undefined;
//       localStorage.removeItem("connectedWallet");
//       if (err) {
//         window.location.reload(false);
//       }
//     });
//     localStorage.setItem("connectedWallet", "walletConnect");
//   };

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      }
    }
  }, [account]);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // const {
  //     library,
  //     chainId,
  //     account,
  //     activate,
  //     deactivate,
  //     active
  //   } = useWeb3React();
  const [count, setCount] = useState(0);   // state for  mint  count

  const [showModal, setShowModal] = useState(false);   // show  wallet modal
  // const [address, setAddress] = useState([])   //  state for  show  address id  on UI
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);






  useEffect(() => {
    async function fetchData() {
      let s = await nftContract.methods.totalSupply().call();
      settotalMinted(s)
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      let r = await minterContract.methods.getRound().call();
      console.log("round", r);
      if (r == 0) {
        setround("Whitelist Round - on going")
      }
      else if (r == 1) {
        setround("Special NFT Round")
      }
      else if (r == 2) {
        setround("Public Round")
      }
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      let p = await minterContract.methods.price().call();
      setPrice(Number(p) / 10 ** 18)
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
    let remainingcontri = await minterContract.methods.remainigContribution(account).call();
    let p = await minterContract.methods.price().call();
    let pricee = Number(p) / 10 ** 18
   
    const remainingnfts = (Number(remainingcontri) / 10 ** 18) / pricee;
    setremainingNfts(remainingnfts)
    }
    if (account) {
      fetchData();
    }
  },[account])


  const mint = async () => {
    try {
      setisDisable(true)
      await minterContract.methods.trade(count).send({
        from: account,
        value: Web3.utils.toWei((count * price).toString(), "ether"),
      });
      setisDisable(false)
      alert("Tx Success")
    }
    catch (e) {
      setisDisable(false)
      alert("Tx Fail")
      console.error("Error", e)
    }
  }

    //   function for Drecrement  mint quantity
    const decrementCountHandler = () => {
      if (count === 0) {
        return 0;
      }
      setCount(count - 1);
    }
  
    const  IncrementCountHandler =()=>{
      if(count >= remainingNfts){
        return remainingNfts;
      }
      else{
  
        setCount(count + 1)
      }
    }
  
  return (
    <div className='container' >
        <div className='center_Img_div'>
            <img src={image1} alt="loaded" className='center_img'/>
        </div>
        <div className='main_div'>
        
            <img src={image2} alt="loaded" className='right_img'/>
            <div className='left_div'>
            <h3>All Excess Pass</h3>
            <div className='box_left'>
                <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",justifyContent:"space-between",gap:"15px"}}>
                    <div style={{display:"flex", justifyContent:"space-evenly",textAlign:"left", alignItems:"center",width:"100%"}}>
                    <div style={{}}>
                        <p>Supply</p>
                        <p>0/8000 Minted</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p>Free + Gas</p>
                    </div>
                    </div>
                    {account ? (
              <div style={{display:"flex",gap:"5px", justifyContent:"center",alignItems:"center"}}>
                <button
                  onClick={decrementCountHandler}
                  style={{padding:"12px",color:"black",borderRadius:"12px",cursor:"pointer"}}
                >
                  -
                </button>
                <p className="border px-3 md:px-6 lg:px-12 py-1">{count}</p>
                <button
                  onClick={IncrementCountHandler}
                  style={{padding:"12px",color:"black",borderRadius:"12px",cursor:"pointer"}}
                >
                  +
                </button>
                <button
                  onClick={()=>setCount(remainingNfts)}
                  style={{padding:"12px",color:"black",borderRadius:"12px",cursor:"pointer"}}
                >
                  Max
                </button>
                <button disabled={isdisable} style={{padding:"12px",color:"black",borderRadius:"12px",cursor:"pointer"}} onClick={() => mint()} >
                  Mint
                </button>
              </div>
            ) : (
              <div    className=" mt-5 xl:mt-0 lg:mt-0 text-center xl:text-start md:text-start  ">
                <button 
                  onClick={openModal} style={{padding:"12px",color:"black",borderRadius:"12px",cursor:"pointer"}}>
                  <span style={{color:"black"}}>
                  Unlock Wallet
                  </span>
                </button>
              </div>
            )}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default PenguineMint;