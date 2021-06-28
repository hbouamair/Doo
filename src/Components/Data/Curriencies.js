import React from 'react'


export function getCurriencies(){
    return fetch("https://api.swapspace.co/api/currencies",
    {
      method: 'GET', 
      mode: 'cors',
      headers: { 
        'Accept': 'application/json',
        "Authorization": 'a3b5214009a3a808a19819c917ce61de1f775b1c723058bbdaed3ffa5e3e79bc57c5c61b9eea3c1887'
       
      }
    })
      .then(data => data.json());

   


  }


