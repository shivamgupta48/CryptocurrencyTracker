// import React, { createContext, useContext, useEffect, useState } from 'react'

// const Crypto = createContext(); 

// const CryptoContext = ({childern}) => {
//     const [currency , setCurrency] = useState("INR");
//     const [symbol , setSymbol] = useState("₹");
//     useEffect(()=>{
//         if(currency === "INR") setSymbol("₹")
//             else if(currency === "USD") setSymbol("$")
//     },[currency])
//    return (
//     <Crypto.Provider value={{currency,symbol,setCurrency}}>{childern}</Crypto.Provider>
//   )
// }

// export default CryptoContext

// export const CryptoState  = () =>{
//     return useContext(Crypto); 
// }