import React from 'react'
import "../ui/pop-menu.css"

function PopMenu({view, onMouseOut}) {

  const active = view ? "active-pop-menu" : "not-active"
  

  return (
    <div className={active} onMouseOut={onMouseOut} style={{
        display: "flex",
        position: "absolute",
        top: "50px",
        width: "230px",
        backgroundColor: "#fff",
        cursor: "default"
    }}>


        
        
    </div>      
    )
}

export default PopMenu