import React from 'react'
import './Header.css'
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = () => {
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

export default React.memo(Header)
