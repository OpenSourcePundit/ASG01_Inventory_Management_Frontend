import React from 'react'
import { useNavigate } from "react-router-dom";

import "./nav.css"
const Nav = () =>{
 const navigate = useNavigate();
    return(
        <div className="nav-bar">
            <div className="nav-heading" onClick={()=>navigate('./')}>Inventory Page</div>
            <div className="nav-heading" onClick={()=>navigate('./sales')}>Sales Page</div>
            <div className="nav-heading" onClick={()=>navigate('./reports')}>Reports</div>
        </div>
    )
}

export default Nav;