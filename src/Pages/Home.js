import React, { Component } from 'react'
import ConnectBtn from "../Components/ConnInput";
import Currencies from '../Components/Currencises'
import LogoCard from "../Components/LogoCard";
import SubmitBtn from "../Components/SubmitBtn";
import Logo from "../assets/Logo.png";
import Image1 from "../assets/image 1.svg";
import './Home.css'
import ConnectCredit from '../Components/ConnInput'
import Add from "../assets/add.svg";
import creditCard from "../assets/creditCard.svg";
import CreditCard from "../Components/CreditCard";
import mainImg from "../assets/image 12.png";
import Arrow from "../assets/arrow.svg";
import Web3Connect from "web3connect";
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";

import Twitter from "../assets/Vector.png";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={

            Currencies: [],
            Amounts: []
        }
      }

    

      componentDidMount() {
          

        
      
    }


       

    
    
    

    render() {
        return (
            <div className="Home">
            <ConnectCredit/>
            <div className="arrowCon">
            <img src={Arrow} alt="" />
          </div>
          
                <Currencies/>

             


       
            </div>
        )
    }
}
