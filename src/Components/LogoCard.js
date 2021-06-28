import React from 'react'
import "./styles.css"

const LogoCard = (props) => {

    const clickFunction = (code )=>{
        const result = fetch ("https://api.swapspace.co/api/amounts?from=usdt&to="+code+"&amount=0.1" )
    }




    return (

        <div className="logoCard">
        
            <div className="card">
                <img onClick={()=>clickFunction(props.code)} src={"https://icons.bitbot.tools/api/"+props.code+"/64x64"} alt="" />
                
            </div>
            <span>{props.title}</span>
            
        </div>
    )
}

export default LogoCard
