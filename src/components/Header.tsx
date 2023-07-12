import {ReactComponent as AuroraLogo} from '../assets/Aurora.svg'
import React from "react";

interface activePageProps {
  active: string;
}
const Header: React.FC<activePageProps> = ({active}) => {
  return (
    <header>
      <div className="header-box">
        <AuroraLogo className={'aurora-logo'}/>
      </div>
    </header>
)
}

export default Header