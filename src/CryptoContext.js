import React, { createContext, useContext, useEffect, useState } from 'react'


const crypto = createContext()

export const CryptoState = () => {
  return useContext(crypto)
}

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("$")

  useEffect(() => {
    if (currency === "USD") {
      setSymbol("$")
    } else if (currency === "INR") {
      setSymbol("₹")
    }
  }, [currency])
  return (
    <div>
      <crypto.Provider value={{currency, symbol, setCurrency}}>
        {children}
      </crypto.Provider>
    </div>
  )
}

export default CryptoContext