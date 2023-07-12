import {ReactComponent as AuroraLogo} from '../assets/Aurora.svg'
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-box">
        <AuroraLogo className={'aurora-logo'}/>
      </div>
    </header>
  )
}

export default Header