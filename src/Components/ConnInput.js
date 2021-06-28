import React from 'react';
import { useState } from 'react';
import "./styles.css";
import Dialog from '@material-ui/core/Dialog';
import Logo from "../assets/Logo.png";
import RLogin, { RLoginButton } from "@rsksmart/rlogin";
import CreditCard from "../Components/CreditCard";
import creditCard from "../assets/creditCard.svg";
import mainImg from "../assets/image 12.png";
import OnramperWidget from "@onramper/widget";
import Web3Connect from "web3connect";
import Web3 from 'web3';
import $ from 'jquery';
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import DialogContent from '@material-ui/core/DialogContent';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Button from '@material-ui/core/Button';

const providerOptions = {
  walletconnect: {

    package: WalletConnectProvider, // required
    options: {
      infuraId: "3cd774e14cf34ff78167908f8377051c" // required
      
    }

  }
};


let provider = null;
let web3 = null;
let accounts = null;
let Ballance = null; 



function ConnInput() {
  async function ConnectWallet() {
    if (!provider) {
      const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions // required
      });
      web3 = await connect(web3Modal);
    }

    

    if (!accounts) {
      accounts = await web3.eth.getAccounts();
      Ballance = await web3.eth.getBalance(accounts[0]);
      
      prin(` ${Ballance.toString()}`);
      
    }
  }
  async function connect(web3Modal) {
   const  provider = await web3Modal.connect();
    return new Web3(provider);
  }
  function print(str) {
    const p = document.createElement("p");
    p.innerText = str;
    document.getElementById("userWalletAddress").appendChild(p);
  }
  

  function prin(text){
    var input_id = '#ballance';
    $(input_id).val($(input_id).val() + text);
}

  


const [account, setAccount] = useState('')

const [balance, setBalance] = useState('')

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};




const getBalance = () => provider.request({
  method: 'eth_getBalance',
  params: [account]
}).then(setBalance)




    return (
        <div>

        <div className="connectBtnCon">
        <div className="row " >

        <div className="col-md-6">
        
        <Button onClick={() => ConnectWallet()} variant="contained" color="primary" >
        Connect Wallet
      </Button>
       
      
        
       
         </div>
        

        <div className="col-md-6">
        
        
       
        
        </div>
        </div>
          
        </div>
        <div className="logoCon">
        <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="inputSec">
        <img src={mainImg} alt="" className="mainImg" />

       
  
        <input id="ballance"  className="input" readOnly />
        <button className="hiddenBtn" onClick={handleClickOpen}>
        <CreditCard  Img={creditCard} title="Refill" /></button>
        <Dialog
        open={open}
        onClose={handleClose}
        
      >
      <DialogContent>

      <div
      style={{
        width: "440px",
        height: "595px",
        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        margin: "auto"
      }}
    >
      <OnramperWidget
      defaultAmount={50}
      API_KEY="pk_prod_4yGL6QvQ9_5Y2aT80m30V_av4lNaHzX6Ld1Tx0B8edA0"
      defaultCrypto={"USDT"}
      defaultAddrs= {"USDT"}
      filters={{
        onlyCryptos: ["USDT"],
        
      }}
      defaultFiat={"USD"}
      redirectURL={'http://localhost:3000'}
    />
    </div>
    </DialogContent>
      
     
      
    

      </Dialog>

        
        
        </div>



        </div>
    )
}
export default ConnInput;