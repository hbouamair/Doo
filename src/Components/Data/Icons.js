import React from 'react'


 function getIcons(){

  
    return fetch(`https://icons.bitbot.tools/api/xmr/64x64` ,{
      mode: 'no-cors',  

    })
     // make a 2nd request and return a promis
  .then(response => response.blob())
  .then(image => {
    // Create a local URL of that image
    const localUrl = URL.createObjectURL(image);
    return localUrl ;
})

    
  }
  export default getIcons;