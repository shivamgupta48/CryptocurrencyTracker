import React from 'react'
import './Header.css'
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
// import { CryptoState } from '../CryptoContext';

const Header = () => {
//  const {Currency,setCurrency} = CryptoState();
 const navigate = useNavigate();
  return (
    <div className='header'>
      <h3 className='logo' onClick={() => navigate("/")}>Crypto Hunter</h3>
      <div className='Icon'>
      <RxDropdownMenu />
      </div>
    </div>
  )
}

export default Header
